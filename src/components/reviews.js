import React, { useContext } from 'react';
import { TheContext } from './context';
import "./reviews.css";
const Reviews=()=>{
    const {setDetail}=useContext(TheContext);
    return(<div className="reviews">
            <svg onClick={()=>setDetail(false)} className="svgX" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L25 25" stroke="#1F1F1F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 5L5 25" stroke="#1F1F1F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg className="svgY" width="10" height="50" viewBox="0 0 10 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.8" width="10" height="50" rx="5" fill="#ACACAC"/>
            </svg>
            <div>
            <div>
                <h1 className="h11">REVIEWS (16)</h1>
            </div>
            <div>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C6B67E"/>
                    <path d="M17.6061 32.162C19.5681 32.162 21.1701 31.082 21.1701 28.508V19.13H19.6041V28.436C19.6041 30.164 18.7941 30.884 17.5161 30.884C16.7421 30.884 16.2741 30.722 15.8061 30.524V31.82C16.1481 32 16.6341 32.162 17.6061 32.162ZM24.3007 32H28.7107C31.2847 32 32.9407 30.83 32.9407 28.4V28.328C32.9407 26.654 32.2387 25.7 30.3667 25.25C31.8427 24.746 32.3107 23.702 32.3107 22.532V22.46C32.3107 19.922 30.5647 19.13 28.1707 19.13H24.3007V32ZM25.8307 30.776V25.97H28.4587C30.5287 25.97 31.4107 26.726 31.4107 28.31V28.382C31.4107 29.948 30.5467 30.776 28.6747 30.776H25.8307ZM25.8307 24.746V20.354H28.1347C29.9347 20.354 30.7807 20.948 30.7807 22.406V22.478C30.7807 24.062 30.0607 24.746 28.1707 24.746H25.8307Z" fill="white"/>
            </svg>
                <div>
                   <h4>John Bidenn<svg width="82" height="14" viewBox="0 0 82 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3607 0L9.6359 4.60787L14.7214 5.34711L11.0411 8.93431L11.9091 14L7.3607 11.6099L2.81229 14L3.68035 8.93431L0 5.34711L5.0855 4.60787L7.3607 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8035 0L43.0786 4.60787L48.1642 5.34711L44.4838 8.93431L45.3519 14L40.8035 11.6099L36.255 14L37.1231 8.93431L33.4427 5.34711L38.5283 4.60787L40.8035 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0821 0L26.3573 4.60787L31.4428 5.34711L27.7625 8.93431L28.6306 14L24.0821 11.6099L19.5337 14L20.4018 8.93431L16.7214 5.34711L21.8069 4.60787L24.0821 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5248 0L59.8 4.60787L64.8855 5.34711L61.2051 8.93431L62.0732 14L57.5248 11.6099L52.9763 14L53.8444 8.93431L50.1641 5.34711L55.2496 4.60787L57.5248 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M74.2462 0L76.5214 4.60787L81.6069 5.34711L77.9265 8.93431L78.7946 14L74.2462 11.6099L69.6978 14L70.5658 8.93431L66.8855 5.34711L71.971 4.60787L74.2462 0Z" fill="#AFAFAF"/>
                                </svg>
                    </h4>
                    <p>Oct 15, 2020</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C6B67E"/>
                    <path d="M16.6106 32.162C19.9046 32.162 22.1906 30.182 22.1906 26.456V25.502H16.8986V26.798H20.6606C20.6066 29.084 19.4006 30.902 16.6106 30.902C13.5866 30.902 12.0026 28.814 12.0026 25.628V25.484C12.0026 22.334 13.6946 20.174 16.6466 20.174C18.5186 20.174 19.9226 20.966 20.2826 23.018H21.8486C21.4526 20.12 19.1666 18.932 16.6106 18.932C12.9206 18.932 10.3826 21.74 10.3826 25.502V25.646C10.3826 29.408 12.6506 32.162 16.6106 32.162ZM24.8114 32H26.2514V21.164L30.6614 32H31.1474L35.4134 21.164V32H36.9794V19.13H34.8194L30.9674 29.156L26.9894 19.13H24.8114V32Z" fill="white"/>
            </svg>
            <div>
                   <h4>Grant Marshall<svg width="82" height="14" viewBox="0 0 82 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3607 0L9.6359 4.60787L14.7214 5.34711L11.0411 8.93431L11.9091 14L7.3607 11.6099L2.81229 14L3.68035 8.93431L0 5.34711L5.0855 4.60787L7.3607 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8035 0L43.0786 4.60787L48.1642 5.34711L44.4838 8.93431L45.3519 14L40.8035 11.6099L36.255 14L37.1231 8.93431L33.4427 5.34711L38.5283 4.60787L40.8035 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0821 0L26.3573 4.60787L31.4428 5.34711L27.7625 8.93431L28.6306 14L24.0821 11.6099L19.5337 14L20.4018 8.93431L16.7214 5.34711L21.8069 4.60787L24.0821 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5248 0L59.8 4.60787L64.8855 5.34711L61.2051 8.93431L62.0732 14L57.5248 11.6099L52.9763 14L53.8444 8.93431L50.1641 5.34711L55.2496 4.60787L57.5248 0Z" fill="#AFAFAF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M74.2462 0L76.5214 4.60787L81.6069 5.34711L77.9265 8.93431L78.7946 14L74.2462 11.6099L69.6978 14L70.5658 8.93431L66.8855 5.34711L71.971 4.60787L74.2462 0Z" fill="#AFAFAF"/>
                                    </svg>
                    </h4>
                    <p>Oct 15, 2020</p>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <div>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C6B67E"/>
                    <path d="M15.0018 32H16.5678V26.762H18.6558C21.1038 26.762 23.1558 25.7 23.1558 22.964V22.892C23.1558 20.21 21.1218 19.13 18.6558 19.13H15.0018V32ZM16.5678 25.52V20.39H18.7638C20.5098 20.39 21.5898 21.074 21.5898 22.892V22.964C21.5898 24.62 20.5998 25.52 18.7638 25.52H16.5678ZM28.7548 32H30.6268L35.0728 19.13H33.5968L29.7628 30.488L25.9288 19.13H24.3808L28.7548 32Z" fill="white"/>
            </svg>
                <div>
                    <h4>Pena Valdez<svg width="82" height="14" viewBox="0 0 82 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3607 0L9.6359 4.60787L14.7214 5.34711L11.0411 8.93431L11.9091 14L7.3607 11.6099L2.81229 14L3.68035 8.93431L0 5.34711L5.0855 4.60787L7.3607 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8035 0L43.0786 4.60787L48.1642 5.34711L44.4838 8.93431L45.3519 14L40.8035 11.6099L36.255 14L37.1231 8.93431L33.4427 5.34711L38.5283 4.60787L40.8035 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0821 0L26.3573 4.60787L31.4428 5.34711L27.7625 8.93431L28.6306 14L24.0821 11.6099L19.5337 14L20.4018 8.93431L16.7214 5.34711L21.8069 4.60787L24.0821 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5248 0L59.8 4.60787L64.8855 5.34711L61.2051 8.93431L62.0732 14L57.5248 11.6099L52.9763 14L53.8444 8.93431L50.1641 5.34711L55.2496 4.60787L57.5248 0Z" fill="#FFC100"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M74.2462 0L76.5214 4.60787L81.6069 5.34711L77.9265 8.93431L78.7946 14L74.2462 11.6099L69.6978 14L70.5658 8.93431L66.8855 5.34711L71.971 4.60787L74.2462 0Z" fill="#FFC100"/>
                                </svg>
                    </h4>
                    <p>Oct 24, 2020</p>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
            </div>
            </div>
    </div>)
}
export default Reviews;