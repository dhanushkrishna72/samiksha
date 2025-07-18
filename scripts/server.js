import { Resend } from 'resend';

const resend = new Resend('re_DMyu6PAp_Q52oMZKdyvzixDSyvftBQaM8');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: emails,
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});