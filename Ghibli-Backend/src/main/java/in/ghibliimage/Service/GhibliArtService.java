package in.ghibliimage.Service;

import in.ghibliimage.Client.StabilityAIClient;
import in.ghibliimage.DTO.TextToImageRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class GhibliArtService {
    private final StabilityAIClient stabilityClient;
    private final String api_key;

    public GhibliArtService(
            StabilityAIClient stabilityClient ,
            @Value("${stability.api.key}") String api_key
    ) {
        this.stabilityClient = stabilityClient;
        this.api_key = api_key;
    }

    public byte[] createGhibliArt(MultipartFile image , String prompt) {
        String finalPrompt = prompt + ", in the beautiful, detailed anime style of studio ghibli.";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = "anime";

        return stabilityClient.generateImageFromImage (
                "Bearer " + api_key ,
                engineId ,
                image ,
                finalPrompt ,
                stylePreset
        );
    }

    public byte[] createGhibliAartFromText(String prompt , String style) {
        String finalPrompt = prompt + ", in the beautiful, detailed anime style of studio ghibli.";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = style.equals ( "general" ) ? "anime" : style.replace ( "_" , "-" );
        TextToImageRequest requestPayLoad = new TextToImageRequest ( finalPrompt , stylePreset );
        return stabilityClient.generateImageFromText (
                "Bearer " + api_key ,
                engineId ,
                requestPayLoad
        );
    }
}
