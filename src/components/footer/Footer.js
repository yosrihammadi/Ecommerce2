import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer container">
        <div className="footer__info">
          <h1 className="footer__info-logo">STORE LOGO</h1>
          <p className="footer__info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nunc aliquam mattis posuere. Enim nunc, amet ut arcu massa aliquet.
            Neque non non volutpat sed.
          </p>
          <div className="footer__info__social">
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.9688 5.46875H7.03125C6.16699 5.46875 5.46875 6.16699 5.46875 7.03125V42.9688C5.46875 43.833 6.16699 44.5312 7.03125 44.5312H42.9688C43.833 44.5312 44.5312 43.833 44.5312 42.9688V7.03125C44.5312 6.16699 43.833 5.46875 42.9688 5.46875ZM38.457 16.8701H35.3369C32.8906 16.8701 32.417 18.0322 32.417 19.7412V23.5059H38.2568L37.4951 29.3994H32.417V44.5312H26.3281V29.4043H21.2354V23.5059H26.3281V19.1602C26.3281 14.1162 29.4092 11.3672 33.9111 11.3672C36.0693 11.3672 37.9199 11.5283 38.4619 11.6016V16.8701H38.457Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.75 25C31.75 21.25 28.75 18.25 25 18.25C21.25 18.25 18.25 21.25 18.25 25C18.25 28.75 21.25 31.75 25 31.75C28.75 31.75 31.75 28.75 31.75 25ZM35.25 25C35.25 30.75 30.75 35.25 25 35.25C19.25 35.25 14.75 30.75 14.75 25C14.75 19.25 19.25 14.75 25 14.75C30.75 14.75 35.25 19.25 35.25 25ZM38 14.25C38 15.75 37 16.75 35.5 16.75C34 16.75 33 15.75 33 14.25C33 12.75 34 11.75 35.5 11.75C37 11.75 38 13 38 14.25ZM25 8.5C22 8.5 15.75 8.25 13.25 9.25C11.5 10 10 11.5 9.5 13.25C8.5 15.75 8.75 22 8.75 25C8.75 28 8.5 34.25 9.5 36.75C10 38.5 11.5 40 13.25 40.5C15.75 41.5 22.25 41.25 25 41.25C27.75 41.25 34.25 41.5 36.75 40.5C38.5 39.75 39.75 38.5 40.5 36.75C41.5 34 41.25 27.75 41.25 25C41.25 22.25 41.5 15.75 40.5 13.25C40 11.5 38.5 10 36.75 9.5C34.25 8.25 28 8.5 25 8.5ZM45 25V33.25C45 36.25 44 39.25 41.75 41.75C39.5 44 36.5 45 33.25 45H16.75C13.75 45 10.75 44 8.25 41.75C6.25 39.5 5 36.5 5 33.25V25V16.75C5 13.5 6.25 10.5 8.25 8.25C10.75 6.25 13.75 5 16.75 5H33.25C36.25 5 39.25 6 41.75 8.25C43.75 10.5 45 13.5 45 16.75V25Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.2563 10.2856C47.5167 11.0565 45.6479 11.5773 43.6833 11.8127C45.7104 10.5998 47.227 8.69076 47.95 6.44187C46.0455 7.5731 43.9611 8.36936 41.7875 8.79604C40.3258 7.23534 38.3897 6.20088 36.2799 5.85327C34.17 5.50566 32.0044 5.86435 30.1193 6.87364C28.2341 7.88294 26.735 9.48637 25.8545 11.435C24.974 13.3836 24.7615 15.5684 25.25 17.6502C21.391 17.4564 17.6159 16.4534 14.1696 14.7063C10.7234 12.9591 7.68301 10.5068 5.24584 7.50853C4.4125 8.94603 3.93334 10.6127 3.93334 12.3877C3.93241 13.9856 4.32591 15.559 5.07892 16.9684C5.83193 18.3777 6.92117 19.5794 8.25 20.4669C6.70891 20.4178 5.20182 20.0014 3.85417 19.2523V19.3773C3.85402 21.6184 4.62924 23.7906 6.0483 25.5252C7.46737 27.2598 9.44286 28.4501 11.6396 28.894C10.21 29.2809 8.71112 29.3379 7.25625 29.0606C7.87604 30.989 9.08333 32.6753 10.7091 33.8834C12.3349 35.0915 14.2977 35.761 16.3229 35.7981C12.8851 38.4969 8.63935 39.9608 4.26875 39.9544C3.49455 39.9546 2.721 39.9094 1.95209 39.819C6.3885 42.6714 11.5528 44.1852 16.8271 44.1794C34.6813 44.1794 44.4417 29.3919 44.4417 16.5669C44.4417 16.1502 44.4313 15.7294 44.4125 15.3127C46.311 13.9397 47.9498 12.2396 49.2521 10.2919L49.2563 10.2856Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9792 4.16675C13.4834 4.16675 4.16669 13.4855 4.16669 24.9792C4.16669 33.7959 9.6521 41.3334 17.3959 44.3667C17.2125 42.7209 17.05 40.1876 17.4667 38.3917C17.8459 36.7667 19.9084 28.0459 19.9084 28.0459C19.9084 28.0459 19.2854 26.798 19.2854 24.9542C19.2854 22.0626 20.9625 19.9022 23.0521 19.9022C24.8292 19.9022 25.6854 21.2355 25.6854 22.8334C25.6854 24.6209 24.5479 27.2897 23.9625 29.7647C23.4729 31.8355 25.0021 33.5251 27.0438 33.5251C30.7417 33.5251 33.5875 29.6251 33.5875 23.9938C33.5875 19.0105 30.0063 15.5272 24.8938 15.5272C18.9709 15.5272 15.4938 19.9688 15.4938 24.5584C15.4938 26.3459 16.1834 28.2647 17.0438 29.3084C17.1169 29.387 17.1685 29.4831 17.1937 29.5875C17.2189 29.6919 17.2167 29.8009 17.1875 29.9042C17.0292 30.5605 16.6771 31.9751 16.6104 32.2647C16.5188 32.6459 16.3084 32.7272 15.9125 32.5438C13.3146 31.3334 11.6896 27.5334 11.6896 24.4792C11.6896 17.9147 16.4584 11.8855 25.4417 11.8855C32.6625 11.8855 38.2729 17.0292 38.2729 23.9063C38.2729 31.0813 33.75 36.8501 27.4729 36.8501C25.3625 36.8501 23.3813 35.7563 22.7021 34.4626L21.4042 39.4084C20.9354 41.2167 19.6667 43.4834 18.8188 44.8667C20.8148 45.483 22.8922 45.7955 24.9813 45.7938C36.475 45.7938 45.7938 36.4751 45.7938 24.9813C45.7938 13.4876 36.4729 4.16675 24.9792 4.16675Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__links">
          <h3 className="footer__links-title">Links</h3>
          <a href="" className="footer__links-item">
            home
          </a>
          <a href="" className="footer__links-item">
            shop
          </a>
          <a href="" className="footer__links-item">
            collections
          </a>
          <a href="" className="footer__links-item">
            cart
          </a>
          <a href="" className="footer__links-item">
            wishlist
          </a>
        </div>
        <div className="footer__contact">
          <h3 className="footer__contact-title">Contact</h3>
          <div className="foot__contact__address">
            <svg
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_248)">
                <path
                  d="M10.0938 29.3947C1.58027 17.0526 0 15.7859 0 11.25C0 5.03678 5.03678 0 11.25 0C17.4632 0 22.5 5.03678 22.5 11.25C22.5 15.7859 20.9197 17.0526 12.4062 29.3947C11.8475 30.2018 10.6525 30.2017 10.0938 29.3947ZM11.25 15.9375C13.8388 15.9375 15.9375 13.8388 15.9375 11.25C15.9375 8.66115 13.8388 6.5625 11.25 6.5625C8.66115 6.5625 6.5625 8.66115 6.5625 11.25C6.5625 13.8388 8.66115 15.9375 11.25 15.9375Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_248">
                  <rect width="22.5" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="footer__contact__address-text">
              Street 662 Dax, South
            </p>
          </div>
          <div className="foot__contact__phone">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8435 16.8435C14.469 19.2165 11.718 21.4875 10.6305 20.4C9.07498 18.8445 8.11498 17.4885 4.68298 20.247C1.25248 23.004 3.88798 24.843 5.39548 26.349C7.13548 28.089 13.6215 26.442 20.0325 20.0325C26.442 13.6215 28.0845 7.13549 26.343 5.39549C24.8355 3.88649 23.0055 1.25249 20.2485 4.68299C17.49 8.11349 18.8445 9.07349 20.403 10.6305C21.486 11.718 19.2165 14.469 16.8435 16.8435Z"
                fill="#fff"
              />
            </svg>
            <p className="footer__contact__phone-text">+1 234 567</p>
          </div>
          <div className="foot__contact__email">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5938 5.625C25.4062 5.625 26.875 7.09375 26.875 8.90625V21.0938C26.875 22.9062 25.4062 24.375 23.5938 24.375H6.40625C5.53601 24.375 4.70141 24.0293 4.08606 23.4139C3.4707 22.7986 3.125 21.964 3.125 21.0938V8.90625C3.125 7.09375 4.59375 5.625 6.40625 5.625H23.5938ZM25.3125 11.4694L15.3762 16.9344C15.274 16.9906 15.1605 17.0232 15.044 17.0298C14.9275 17.0364 14.8111 17.0168 14.7031 16.9725L14.6238 16.935L4.6875 11.4688V21.0938C4.6875 21.5496 4.86858 21.9868 5.19091 22.3091C5.51324 22.6314 5.95041 22.8125 6.40625 22.8125H23.5938C24.0496 22.8125 24.4868 22.6314 24.8091 22.3091C25.1314 21.9868 25.3125 21.5496 25.3125 21.0938V11.4694ZM23.5938 7.1875H6.40625C5.95041 7.1875 5.51324 7.36858 5.19091 7.69091C4.86858 8.01324 4.6875 8.45041 4.6875 8.90625V9.68687L15 15.3581L25.3125 9.68625V8.90625C25.3125 8.45041 25.1314 8.01324 24.8091 7.69091C24.4868 7.36858 24.0496 7.1875 23.5938 7.1875Z"
                fill="#fff"
              />
            </svg>
            <p className="footer__contact__email-text">contact@store.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
