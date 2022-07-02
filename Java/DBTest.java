import java.sql.Connection;
import java.sql.DriverManager;

public class DBTest {
   public static void main(String args[]) {
      Connection c = null;
      try {
         Class.forName("org.postgresql.Driver");//postgresql-42.2.9.jar
         c = DriverManager
            .getConnection("jdbc:postgresql://localhost:5432/postgres",
            "postgres", "dbpasswd");
      } catch (Exception e) {
         e.printStackTrace();
         System.err.println(e.getClass().getName()+": "+e.getMessage());
         System.exit(0);
      }
      System.out.println("Opened database successfully");
   }
}

