libreria java conessione completata 14-01-2017
import connessione.open.close.ConessioneMysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLDataException;
import java.sql.SQLException;
import java.sql.Statement;

public class ConessioneMyQuery extends ConessioneMysql {
String driver = "com.mysql.jdbc.Driver";
String URL = "jdbc:mysql://localhost:3306/java2016";
String USER = "root";
String PASSWORD = "****";
static Connection connection = null;

@Override
public void apriconessione() {
// TODO Auto-generated method stub
try {
Class.forName(driver);
String nome = getPrintConessione();

connection = DriverManager.getConnection(URL, USER, PASSWORD);
} catch (SQLException | ClassNotFoundException e) {
e.getMessage();

}

}
