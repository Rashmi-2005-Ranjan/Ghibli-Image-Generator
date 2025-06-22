package in.ghibliimage.Config;

import feign.codec.Encoder;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.cloud.openfeign.support.SpringEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class FeignConfig {
    @Bean
    public Encoder feignFormEncoder() {
        return new SpringEncoder (
                () -> new HttpMessageConverters ( new RestTemplate ( ).getMessageConverters ( ) )
        );
    }
}
