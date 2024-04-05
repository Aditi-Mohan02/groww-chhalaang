package com.bugbashers.stockscreener.controller;

import com.bugbashers.stockscreener.Service.UserService;
import com.bugbashers.stockscreener.model.Stocks;
import com.bugbashers.stockscreener.model.Users;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService theUserService){
        userService = theUserService;
    }
    // add mapping for "/list"

  /*  @GetMapping("/list")
    public String listEmployees(Model theModel) {

        //get employees from the DB (not the hardcoded one)
        List<Employee> theEmployees = employeeService.findAll();

        // add to the spring model
        //employees is the value we return to html
        theModel.addAttribute("employees", theEmployees);

        //list-employees is the name of HTML file present in trmplates/employees
        return "employees/list-employees";
    }

    @GetMapping("/showFormForAdd")
    public String showFormforAdd(Model theModel){

        //create model attribute to bind form data
        Employee theEmployee = new Employee();

        //our thymeleaf template will access this data("employee") for binding form data
        theModel.addAttribute("employee",theEmployee);

        // redirects to  employee-form.html of employees folder
        return "employees/employee-form";
    }

    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("employeeId") int theId, Model theModel){

        //get the employee from the service
        Employee theEmployee = employeeService.findById(theId);

        //set employee in the model to prepopulate the form
        theModel.addAttribute("employee",theEmployee);

        //send over to our form

        return "employees/employee-form";

    }*/

    @PostMapping("/save")
    //@ModelAttribute("employee") this is form data that is passed in using data binding
    public String saveUser(@RequestBody Users theuser){
       // @ModelAttribute("user")
        // save the employee
        return  userService.save(theuser);

        // use a redirect to list page to prevent duplicate submission
       // return "redirect:/employees/list";
    }

    @PostMapping("/save")
    //@ModelAttribute("employee") this is form data that is passed in using data binding
    public List<Stocks> getStocksName(){
        // @ModelAttribute("user")
        // save the employee
        return   userService.getStockName();

        // use a redirect to list page to prevent duplicate submission
        // return "redirect:/employees/list";
    }



    /*@GetMapping("/delete")
    public String delete(@RequestParam("employeeId") int theId){

        // delete the employee
        employeeService.deleteById(theId);

        // redirect to the /employees/list
        return "redirect:/employees/list";

    }*/


}










