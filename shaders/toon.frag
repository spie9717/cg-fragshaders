#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float red = round(FragColor.r * 4.0) / 4.0;
    float green = round(FragColor.g * 4.0) / 4.0;
    float blue = round(FragColor.b * 4.0) / 4.0;
    FragColor = vec4(red, green, blue, FragColor.a);
}
