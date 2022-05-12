#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;
uniform float time;

out vec4 FragColor;

void main() {
    vec2 texcoordOffset = texcoord * (time * 5.0) / 60.0;
    vec2 texcoord2 = texcoord * texcoordOffset;
    FragColor = texture(image, texcoord2);
    float red = (FragColor.r * time);
    float green = FragColor.g * 0.5;
    float blue = FragColor.b * 0.0;
    FragColor = vec4(red, green, blue, FragColor.a);
}
