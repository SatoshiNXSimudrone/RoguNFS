function createFormats {
        echo "SELECT * FROM abyss;" | sqlite3 db/rns.db > JAVA/tmp2.txt
        echo "SELECT * FROM gateWatch;" | sqlite3 db/rns.db > JAVA/tmp1.txt
        cd JAVA
        java Parser tmp1.txt tmp2.txt
        cd ..
}

createFormats