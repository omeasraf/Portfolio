import React from 'react'

const Icon = ({ fill, width = '10', height = '10', className = "block h-10 w-auto" }) => {
    return (
        <svg className={className} viewBox="0 0 468 518" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M234 10C225.681 10 217.498 12.1822 210.221 16.3427L35.2214 116.425C27.5803 120.794 21.2097 127.191 16.7734 134.955C12.3371 142.719 9.9977 151.566 10 160.578V357.422C10.0065 366.425 12.3501 375.261 16.7859 383.016C21.2217 390.77 27.5875 397.159 35.2214 401.524L210.221 501.657C217.498 505.818 225.681 508 234 508C242.319 508 250.502 505.818 257.779 501.657L432.778 401.524C440.416 397.157 446.784 390.764 451.22 383.005C455.656 375.245 457.998 366.404 458 357.396V160.578C458.002 151.566 455.663 142.719 451.227 134.955C446.79 127.191 440.42 120.794 432.779 116.425L257.779 16.3427C250.502 12.1822 242.319 10 234 10ZM209.229 14.6065C216.805 10.2744 225.33 8 234 8C242.67 8 251.195 10.2744 258.771 14.6065L433.771 114.689C441.727 119.238 448.353 125.894 452.963 133.963C457.574 142.031 460.002 151.221 460 160.578V357.396C459.998 366.749 457.567 375.934 452.957 383.997C448.346 392.061 441.724 398.713 433.772 403.26C433.772 403.26 433.772 403.26 433.772 403.26L258.772 503.393C251.195 507.725 242.67 510 234 510C225.33 510 216.805 507.726 209.229 503.393L34.2286 403.26C26.2803 398.715 19.6599 392.068 15.0499 384.009C10.4399 375.95 8.00669 366.771 8 357.423L8 160.578C8 160.578 8 160.579 8 160.578C7.99765 151.221 10.4265 142.031 15.0369 133.963C19.6475 125.894 26.2727 119.238 34.2286 114.689C34.2286 114.689 34.2285 114.689 34.2286 114.689L209.229 14.6065Z" fill={fill} />
            <path d="M432.779 116.425C440.42 120.794 446.79 127.191 451.227 134.955C455.663 142.719 458.002 151.566 458 160.578V357.396C457.998 366.404 455.656 375.245 451.22 383.005C446.784 390.764 440.416 397.157 432.778 401.524L257.779 501.657C250.502 505.818 242.319 508 234 508C225.681 508 217.498 505.818 210.221 501.657L35.2214 401.524C27.5875 397.159 21.2217 390.77 16.7859 383.016C12.3501 375.261 10.0065 366.425 10 357.422V160.578C9.9977 151.566 12.3371 142.719 16.7734 134.955C21.2097 127.191 27.5803 120.794 35.2214 116.425L210.221 16.3427C217.498 12.1822 225.681 10 234 10C242.319 10 250.502 12.1822 257.779 16.3427L432.779 116.425ZM432.779 116.425L433.185 115.715M209.229 14.6065C216.805 10.2744 225.33 8 234 8C242.67 8 251.195 10.2744 258.771 14.6065M209.229 14.6065L34.2286 114.689M209.229 14.6065L209.725 15.4746M258.771 14.6065L258.275 15.4746M258.771 14.6065L433.771 114.689C441.727 119.238 448.353 125.894 452.963 133.963C457.574 142.031 460.002 151.221 460 160.578V357.396C459.998 366.749 457.567 375.934 452.957 383.997C448.346 392.061 441.724 398.713 433.772 403.26M433.772 403.26C433.772 403.26 433.772 403.26 433.772 403.26ZM433.772 403.26L258.772 503.393C251.195 507.725 242.67 510 234 510C225.33 510 216.805 507.726 209.229 503.393L34.2286 403.26C26.2803 398.715 19.6599 392.068 15.0499 384.009C10.4399 375.95 8.00669 366.771 8 357.423L8 160.578M8 160.578C8 160.579 8 160.578 8 160.578ZM8 160.578C7.99765 151.221 10.4265 142.031 15.0369 133.963C19.6475 125.894 26.2727 119.238 34.2286 114.689M34.2286 114.689C34.2285 114.689 34.2286 114.689 34.2286 114.689Z" stroke={fill} stroke-width="15" />
            <path d="M219.096 255.299C219.096 270.694 216.506 284.147 211.327 295.657C206.147 307.096 198.809 315.837 189.313 321.88C179.817 327.922 168.738 330.944 156.077 330.944C143.703 330.944 132.732 327.922 123.164 321.88C113.596 315.765 106.15 307.096 100.827 295.873C95.575 284.579 92.8773 271.521 92.7334 256.702V245.371C92.7334 230.264 95.3592 216.919 100.611 205.337C105.862 193.754 113.272 184.906 122.84 178.791C132.48 172.604 143.487 169.51 155.861 169.51C168.45 169.51 179.529 172.568 189.097 178.683C198.737 184.726 206.147 193.538 211.327 205.121C216.506 216.631 219.096 230.048 219.096 245.371V255.299ZM198.485 245.155C198.485 226.523 194.744 212.243 187.263 202.315C179.781 192.315 169.314 187.316 155.861 187.316C142.768 187.316 132.444 192.315 124.891 202.315C117.409 212.243 113.56 226.055 113.344 243.753V255.299C113.344 273.356 117.121 287.564 124.675 297.923C132.3 308.211 142.768 313.355 156.077 313.355C169.458 313.355 179.817 308.499 187.155 298.787C194.493 289.003 198.27 275.011 198.485 256.81V245.155ZM334.56 287.78H268.735L253.951 328.786H232.585L292.583 171.669H310.712L370.818 328.786H349.56L334.56 287.78ZM274.994 270.73H328.409L301.647 197.243L274.994 270.73Z" fill={fill} />
            <path d="M203.232 251.248L196.545 208.217C196.358 207.014 195.854 205.961 195.137 205.277L175.075 186.152C174.525 185.628 173.879 185.348 173.219 185.348H139.781C139.121 185.348 138.475 185.628 137.925 186.152L117.863 205.277C117.146 205.961 116.642 207.014 116.455 208.217L109.768 251.248C109.644 252.046 109.665 252.875 109.828 253.658L119.859 301.47C120.018 302.229 120.306 302.918 120.697 303.478C121.088 304.038 121.57 304.451 122.1 304.679L155.537 319.022H155.557C156.172 319.287 156.828 319.287 157.443 319.022H157.46L190.897 304.679C191.427 304.452 191.91 304.04 192.301 303.481C192.693 302.922 192.981 302.233 193.141 301.475L203.172 253.663C203.336 252.878 203.357 252.047 203.232 251.248V251.248ZM139.534 255.231L126.46 217.846L150.809 230.507L139.534 255.231ZM156.5 235.537L168.501 261.848H144.496L156.5 235.537ZM167.809 271.411L156.5 303.751L145.191 271.411H167.809ZM162.191 230.507L186.537 217.846L173.463 255.236L162.191 230.507ZM163.823 219.486L174.175 196.79L185.928 207.992L163.823 219.486ZM156.5 218.033L145.954 194.911H167.046L156.5 218.033ZM149.177 219.486L127.075 207.992L138.825 196.79L149.177 219.486ZM132.98 257.88L116.923 249.269L120.939 223.44L132.98 257.88ZM150.047 306.682L128.306 297.359L138.765 274.418L150.047 306.682ZM174.232 274.418L184.695 297.354L162.953 306.682L174.232 274.418ZM192.061 223.44L196.073 249.269L180.017 257.875L192.061 223.44ZM118.171 260.151L133.535 268.384L124.196 288.862L118.171 260.151ZM188.804 288.862L179.465 268.384L194.829 260.151L188.804 288.862Z" fill={fill} />
            <path d="M313.043 163.677C313.606 163.991 313.827 164.371 313.717 164.713C313.717 164.713 313.298 171.299 305.225 174.444C305.131 174.484 305.032 174.521 304.932 174.558C304.208 174.827 303.359 175.019 302.432 175.123C301.505 175.228 300.519 175.243 299.53 175.167C298.541 175.092 297.569 174.927 296.669 174.683C295.768 174.439 294.958 174.12 294.283 173.744C293.609 173.368 293.083 172.943 292.737 172.494C292.391 172.044 292.23 171.578 292.265 171.122C292.3 170.667 292.529 170.23 292.94 169.838C293.351 169.446 293.934 169.106 294.658 168.838L309.328 163.392C309.838 163.203 310.516 163.127 311.213 163.18C311.909 163.233 312.568 163.412 313.043 163.676L313.043 163.677Z" stroke={fill} stroke-width="9" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M313.437 166.128L313.423 166.12" stroke={fill} stroke-width="9" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M306.553 169.252C307.845 169.44 309.749 169.229 311.407 168.649C311.905 168.472 312.339 168.282 312.677 168.077" stroke={fill} stroke-width="9" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M311.024 166.486C311.959 166.498 312.825 166.356 313.459 166.078" stroke={fill} stroke-width="9" stroke-miterlimit="10" stroke-linecap="round" />
        </svg>

    )
}

export default Icon;

