package in.ghibliimage.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class TextToImageRequest {
    private List<TextPrompt> textPrompts;
    @Getter
    private double cfg_scale = 7;
    @Getter
    private int width = 768;
    @Getter
    private int height = 512;
    @Getter
    private int samples = 1;
    @Getter
    private int steps = 30;
    @Getter
    private String style_preset;


    //Inner class For The Text Prompts
    @Setter
    @Getter
    public static class TextPrompt {
        private String text;

        public TextPrompt(String text) {
            this.text = text;
        }

    }


    //Constructor
    public TextToImageRequest(String text , String style) {
        this.textPrompts = List.of ( new TextPrompt ( text ) );
        this.style_preset = style;
    }

    //Getters For JSON Serialization
    public List<TextPrompt> getText_prompts() {
        return textPrompts;
    }

}
