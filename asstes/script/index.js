.arrow {

    position: absolute;

    top: 50%;

    left: 50%;

    transform: translate(-50%, -50%);

}



.arrow span {

    display: block;

    width: 50px;

    height: 50px;

    border-bottom: 5px solid #06A8FF;

    border-right: 5px solid #06A8FF;

    transform: rotate(45deg);

    margin: -10px;

    animation: scroll1 2s infinite;

}



.arrow span:nth-child(2) {

    animation-delay: -.2s;

}



.arrow span:nth-child(3) {

    animation-delay: -.4s;

}



@keyframes scroll1 {

    0% {

        opacity: 1;

        transform: rotate(45deg) translate(-20px, -20px);

        border-bottom: 5px solid #ff6a06;

        border-right: 5px solid #ff9b06;

    }

    50% {

        opacity: 1;

        transform: rotate(45deg) translate(-20px, -20px);

    }

    100% {

        opacity: 1;

        transform: rotate(45deg) translate(-20px, -20px);

    }

}