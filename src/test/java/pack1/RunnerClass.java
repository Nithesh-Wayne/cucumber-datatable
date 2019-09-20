package pack1;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
//@CucumberOptions(features= {"C:\\Users\\a08019dirp_c2x.08.05\\eclipse-workspace\\cucumber\\src\\test\\resources\\file1.feature"},glue="pack1")
@CucumberOptions(monochrome=true,plugin= {"pretty","json:cucumber-json-reports.json"})
public class RunnerClass {
	
	
}
