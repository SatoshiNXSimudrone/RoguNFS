import java.util.*;
import java.io.*;
import java.text.*;
/*
    {"Gateway":[
    {"stamp":"", "public_ip":"","port":"","os":"","name":""},  
     ]}
    {"abyss":[
    {"stamp":"", "ip":"","port":"","os":"","name":""},  
     ]}
*/
public class Parser{
	public static void main(String [] args) throws IOException{
        File f1 = new File(args[0]);
        File f2 = new File(args[1]);
        Scanner in = new Scanner(f1);
        String tmp;
        String [] n = new String [5];
        String obj1="{\"Gatewatch\":[\n";
        String obj2="{\"abyss\":[\n";
        String obj3="";
        String obj4="";
        int ctr=0;
        while(in.hasNext()){
            tmp= in.nextLine();
            obj3+=tmp.replaceAll("\\|",";")+"\n";
            n = tmp.split("\\|");
            if (ctr == 4)  
              obj1+="{\"stamp\":\""+n[0]+"\", \"public_ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"}\n";
            else
                obj1+="{\"stamp\":\""+n[0]+"\", \"public_ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"},\n";
            ctr++;
        }
        if (ctr == 1)  
              obj1="{\"GateWatch\":[\n{\"stamp\":\""+n[0]+"\", \"public_ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"}\n";
        ctr=0;
        obj1+="]}";
        in.close();
        in = new Scanner(f2);
        while(in.hasNext()){
            tmp= in.nextLine();
            System.out.println(tmp);
            obj4+=tmp.replaceAll("\\|",";")+"\n";
            n = tmp.split("\\|");
           if (ctr == 4)  
              obj2+="{\"stamp\":\""+n[0]+"\", \"ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"}\n";
            else
                obj2+="{\"stamp\":\""+n[0]+"\", \"ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"},\n";
            ctr++;
        }
        if (ctr == 1)  
            if (ctr == 1)  
              obj1="{\"abyss\":[\n{\"stamp\":\""+n[0]+"\", \"ip\":\""+n[1]+"\",\"port\":\""+n[2]+"\",\"os\":\""+n[3]+"\",\"name\":\""+n[4]+"\"}\n";
        obj2+="]}";
        in.close();

        String a=""+n[4]+"_gateWatch.json";
        String b=""+n[4]+"_abyss.json";
        String c=""+n[4]+"_gateWatch.csv";
        String d=""+n[4]+"_abyss.csv";

        File x = new File(a);
        File y = new File(b);
        File z = new File(c);
        File e = new File(d);

        PrintWriter w1 = new PrintWriter(x);
        w1.println(obj1);
        PrintWriter w2 = new PrintWriter(y);
        w2.println(obj2);
        PrintWriter w3 = new PrintWriter(z);
        w3.println(obj3);
        PrintWriter w4 = new PrintWriter(e);
        w4.println(obj4);
        w1.close();
        w2.close();
        w3.close();
        w4.close();
        System.out.println(obj1);
        System.out.println("\n\n");
        System.out.println(obj2);
        System.out.println("\n\n");
        System.out.println(obj3);
        System.out.println("\n\n");
        System.out.println(obj4);
        System.out.println("\n\n");
	}

}