/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="sm:px-[55px] px-10 flex flex-col items-center sm:py-20 py-0 pb-10 sm:pb-20 bg-color-2"
    >
      <h1 className="font-bold text-4xl">About</h1>
      <div className="text-[11px] mt-[-5px] text-main pb-10">
        Why we do what we do
      </div>
      <div className="sm:w-[75%] w-full">
        Introducing our rewards app - your key to unlocking a world of exclusive
        perks, right at your fingertips! We understand that everyone loves a
        good deal, and what better way to enjoy them than by getting rewarded
        for shopping at your favorite local stores? Our app connects you to a
        diverse range of businesses in your area, making it easy for you to
        discover and claim rewards without any extra cost. Simply shop as you
        usually do, and let the rewards roll in.
        <br />
        <br /> One of the most appealing aspects of our rewards app is its focus
        on supporting local businesses within the community. By using this app,
        you're not only accessing fantastic rewards for yourself, but also
        contributing to the growth of your favorite neighborhood shops. It's a
        win-win situation for everyone involved! As more and more businesses
        join the app, you'll find an ever-expanding list of offers and rewards,
        allowing you to discover new favorites while supporting the ones you've
        always loved.
        <br />
        <br /> Last but not least, the beauty of our rewards app lies in its
        simplicity and inclusivity. It's designed to be an all-in-one platform,
        catering to a variety of tastes and preferences. Whether you're a
        foodie, a fashion enthusiast, or a fitness fanatic, there's something
        for everyone. With just a few taps, you'll gain access to personalized
        rewards, special offers, and insider information about your favorite
        shops. So go ahead, give our rewards app a try, and experience the joy
        of shopping local while reaping the benefits of your loyalty.
      </div>
    </section>
  );
});

export default About;
