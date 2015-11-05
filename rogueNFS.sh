#!/bin/bash
function recon {
    echo "enter name for target!"
    read target
    eva=`sqlite3 db/rns.db "SELECT count(name) FROM gateWatch WHERE name='home'"`;
    echo 
    if [ $eva -gt 0 ] 
    then

        echo "There is allready Data asscosciated with this target"
        echo "Press any key to continue"
        read dummy

    else
        echo "Scans are running in the background we'll notify you "
        echo "When we are finish"
        
        stamp=`date +%s`
        ip=`curl -s checkip.dyndns.org | sed -e 's/.*Current IP Address: //' -e 's/<.*$//'`
        path="OS_scans/$stamp.txt"
        
        nmap -O --osscan-guess $ip > tmp1.txt
       
        cat tmp1.txt | grep OS > $path
        cat tmp1.txt | grep tcp > tmp2.txt
       
        while read -r line
        do
            port=$line
            tableEntry="$stamp,'$ip','$port','$path'"
            echo "INSERT INTO gateWatch (unixDate, public_ip,port,os) VALUES ($tableEntry);" | sqlite3 db/rns.db
        done < "tmp2.txt"

        echo "UPDATE gateWatch set name='$target' WHERE unixDate=$stamp;" | sqlite3 db/rns.db
        dirName=`date -ud @$stamp`
        cd OS_scans
        mkdir ${dirName// /_}
        cd ..    
        # to do grep only IP adresses and do scan line by line
        # add to db.....
        arp-scan  -localnet | grep -oE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" > tmp1.txt
    while read -r line
        do
            ip=$line
            path="OS_scans/${dirName// /_}/$ip.txt"
            echo $path
            nmap -O --osscan-guess $ip > tmp2.txt
            cat tmp2.txt | grep OS > $path
            cat tmp2.txt | grep tcp > tmp3.txt

            while read -r line2
    	    do

        		port=$line2
                echo $port
        		tableEntry="$stamp,'$ip','$port','$path'"
                echo $tableEntry
                echo "INSERT INTO abyss (unixDate, ip,port,os) VALUES ($tableEntry);"
        		echo "INSERT INTO abyss (unixDate, ip,port,os) VALUES ($tableEntry);" | sqlite3 db/rns.db
    	    done < "tmp3.txt"

        done < "tmp1.txt"
    echo "UPDATE abyss set name='$target' WHERE unixDate=$stamp;" | sqlite3 db/rns.db
    createFormats
    echo "All scans are finished no errors "
    echo "You can use Analyze to browse Data"
    echo "press any key to continue!"
    read tmp     
    rm tmp1.txt
    rm tmp2.txt
    rm tmp3.txt
  fi    
}

function createFormats {
        echo "SELECT * FROM abyss;" | sqlite3 db/rns.db > JAVA/tmp2.txt
        echo "SELECT * FROM gateWatch;" | sqlite3 db/rns.db > JAVA/tmp1.txt
        cd JAVA
        java Parser tmp1.txt tmp2.txt
        mv *_gateWatch.json ../JSON/
        mv *_abyss.json ../JSON/subnets/
        mv *.csv ../CSV/
        cd ..

}
function analize {
    cd html
    node server.js
    read dummy
    cd ..
}
function MITM {
     printf"MITM"
}
function rogueWatch {
     printf"remoteWatch"
}
function remoteShells {
     printf"remote shell"
}
function passwordCrack {
     printf"password crack"
}
runProg=1
cat db/shema.sql | sqlite3 db/rns.db
while [ runProg==1 ]
do
   cat misc/header.txt
   read -p "`hostname`@rogueNFS# " choice
    case "$choice" in
        1)  recon
            ;;
        2)  analize
            ;;
        3)  MITM
            ;;
        4) wifi_pwn
           ;;
        5) rogueWatch
           ;;
        6) remoteShells
           ;;
        7) passwordCrack
           ;;
        8) echo  "Exiting RogueNFX"
           exit
           ;;   
        9) cat misc/help.txt | less
           echo ""
           echo "Press any key to continue"
           read dummy
        ;;  
        *) echo "Invalid Option press any key to continue"
           read tmp
           ;;
    esac
    done
