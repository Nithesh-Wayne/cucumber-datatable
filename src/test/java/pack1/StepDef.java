package pack1;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
	
	WebDriver driver;
//	@Given("Browser login")
//	public void browser_login() {
//	    System.setProperty("webdriver.chrome.driver", "C:\\CD2\\chromedriver.exe");
//	    driver = new ChromeDriver();
//	    driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
//	}
//
//	@When("user enters username in userid field as {string}")
//	public void user_enters_username_in_userid_field(String uid) {
//		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys(uid);;
//	    System.out.println("uid");
//	    
//	}
//
//	@And("user enters password in pwd field as {string}")
//	public void user_enters_password_in_pwd_field(String pwd) {
//		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(pwd);;
//	    System.out.println("pwd");
//	    
//	}
//
//	@And("Click login button")
//	public void click_login_button() {
//		driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();
//	    System.out.println("login");
//	    
//	}

	@Then("user log outs")
	public void user_log_outs() {
		//driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/a")).click();
	    
	}
	@Given("user credss")
	public void user_credss() {
	    
	}

	@When("user checks the creds and enters username and password as")
	public void user_checks_the_creds_and_enters_username_and_password_as(io.cucumber.datatable.DataTable usercreds) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
		System.setProperty("webdriver.chrome.driver", "C:\\CD2\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
		List<List<String>> data = usercreds.asLists();
		int sz = data.size();
		//System.out.println("The size is "+sz);
		for(int i=0;i<sz;i++)
		{
			//In the data.get(i).get(0) instead of get(0) we can use get("Name") if we have declared in the feature file as such. 
		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys(data.get(i).get(0));
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(data.get(i).get(1));
		driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();
		driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/a")).click();
		driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
		}
//		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys(data.get(1).get(0));
//		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(data.get(1).get(1));
	    
	}


}
