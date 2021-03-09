package com.armanfar.shopbe.controllers;

import com.armanfar.shopbe.entities.Customer;
import com.armanfar.shopbe.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping(path = "/")
    public List<Customer> findAll() {
        return customerService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Customer findById(@PathVariable Long id) {
        return customerService.findById(id);
    }

    @PostMapping(path = "/")
    public Customer addNewCustomer(@RequestBody Customer customer) {
        return customerService.addNewCustomer(customer);
    }

    @PutMapping(path = "/{id}")
    public Customer updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }
}
