package in.ghibliimage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GhibliBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run ( GhibliBackendApplication.class , args );
    }

}
