package com.armanfar.shopbe.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "customer_surname", nullable = false)
    private String CustomerSurname;

    @Column(name = "date_started", nullable = false)
    private Date dateStarted;

    @Column(name = "home_address")
    private String homeAddress;

    @Column(name = "cell_phone")
    private String cellPhone;

    @Column(name = "work_address")
    private String workAddress;

    @Column(name = "home_phone")
    private String homePhone;

    @Column(name = "work_phone")
    private String workPhone;

    private String description;

}
