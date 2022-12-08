package refactor.kamsung.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address {

    private String firstAddress;
    private String secondAddress;

    protected Address() {}

    public Address(String firstAddress, String secondAddress) {
        this.firstAddress = firstAddress;
        this.secondAddress = secondAddress;
    }
}
