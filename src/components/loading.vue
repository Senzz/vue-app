<template>
    <div>
        <figure class='loading'>
          <div></div><div></div>
          <div></div><div></div>
          <div></div><div></div>
          <div></div><div></div>
        </figure>
    </div>
</template>

<style>
    /*loading*/
    figure.loading {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.4, 1.4);
      position: relative;
      left: 50%;
      top: 50%;
      border-radius: 150px;
      box-sizing: border-box;
      animation: rotation 20s infinite linear;
      width:1rem;
      margin:2rem 0 5rem;
    }

    figure.loading div:after {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border: 1px solid #000;
      box-sizing: border-box;
      position: absolute;
      left: 0.5rem;
      top: 0.5rem;
      animation: shuffle 1.5s infinite;
    }

    figure.loading div:nth-child(1) {
      transform: rotate(0deg)
    }

    figure.loading div:nth-child(1):after {
      animation-delay: -0.5s;
    }

    figure.loading div:nth-child(2) {
      transform: rotate(45deg)
    }

    figure.loading div:nth-child(2):after {
      animation-delay: -1s;
    }

    figure.loading div:nth-child(3) {
      transform: rotate(90deg)
    }

    figure.loading div:nth-child(3):after {
      animation-delay: -1.5s;
    }

    figure.loading div:nth-child(4) {
      transform: rotate(135deg)
    }

    figure.loading div:nth-child(4):after {
      animation-delay: -2s;
    }

    figure.loading div:nth-child(5) {
      transform: rotate(180deg)
    }

    figure.loading div:nth-child(5):after {
      animation-delay: -2.5s;
    }

    figure.loading div:nth-child(6) {
      transform: rotate(225deg)
    }

    figure.loading div:nth-child(6):after {
      animation-delay: -3s;
    }

    figure.loading div:nth-child(7) {
      transform: rotate(270deg)
    }

    figure.loading div:nth-child(7):after {
      animation-delay: -3.5s;
    }

    figure.loading div:nth-child(8) {
      transform: rotate(315deg)
    }

    figure.loading div:nth-child(8):after {
      animation-delay: -4;
    }

    @keyframes rotation {
      100% {
        transform: translate(-50%, -50%) rotate(-360deg) scale(1.4, 1.4);
      }
    }

    @keyframes shuffle {
      50% {
        transform: scale(0.4, 0.4) rotate(-90deg);
        border-radius: 50%;
      }
    }
</style>