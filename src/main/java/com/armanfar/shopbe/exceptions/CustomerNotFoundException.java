package com.armanfar.shopbe.exceptions;

public class CustomerNotFoundException extends RuntimeException {

    public CustomerNotFoundException() {
        super();
    }

    public CustomerNotFoundException(String s) {
        super(s);
    }
}
