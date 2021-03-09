package com.armanfar.shopbe.services;

import com.armanfar.shopbe.entities.Customer;
import com.armanfar.shopbe.exceptions.CustomerIdsAreNoSimilarException;
import com.armanfar.shopbe.exceptions.CustomerNotFoundException;
import com.armanfar.shopbe.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer findById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer addNewCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customer) {
        Customer foundCustomer = customerRepository.findById(id).orElseThrow(CustomerNotFoundException::new);
        if (customer.getId() == foundCustomer.getId()) {
            return customerRepository.save(customer);
        } else {
            throw new CustomerIdsAreNoSimilarException("Customer not found.");
        }
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
}
