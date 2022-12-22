package refactor.kamsung.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import refactor.kamsung.domain.Address;
import refactor.kamsung.domain.User;
import refactor.kamsung.service.UserService;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    @Data
    static class CreateUserRequest {
        private String nickname;
        private String password;
        private String firstAddress;
        private String secondAddress;
    }

    @Data
    @AllArgsConstructor
    static class CreateUserResponse {  // id만있어도되는지
        private Long id;
        private String nickname;
        private String password;
        private String firstAddress;
        private String secondAddress;
    }

    @PostMapping("/api/users")
    public CreateUserResponse saveUser(@RequestBody @Valid CreateUserRequest request) {
        User user = new User();
        user.setNickname(request.getNickname());
        user.setPassword(request.getPassword());
        user.setAddress(new Address(request.getFirstAddress(), request.getSecondAddress()));

        Long id = userService.join(user);
        return new CreateUserResponse(id,
                user.getNickname(),
                user.getPassword(),
                user.getAddress().getFirstAddress(),
                user.getAddress().getSecondAddress());
    }
}
