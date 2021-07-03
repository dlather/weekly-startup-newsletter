import React from 'react';
import 'react-mailchimp-email-signup-form/dist/esm/index.css';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

// Here's a usage example when using functional components
export const SignupForm = () => (
  <ReactMailchimpEmailSignupForm
    elementId="first-email-signup-form"
    url="https://gmail.us6.list-manage.com/subscribe/post?u=111d58ffb344e37adb15d9d05&amp;id=434923944f"
    title=""
    subtitle=""
  />
);