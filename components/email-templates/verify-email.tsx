import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface VerifyEmailProps {
  verificationCode?: string;
}

export default function VerifyEmail({
  verificationCode,
}: VerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Storix Email Verification</Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src="https://e1buy3qdez.ufs.sh/f/J6dncW3AVEReIpeN7QqqVRcvJaYSrb37TtKOLU1oWzGDlQNm"
                width="120"
                height="72"
                alt="Storix Logo"
                style={logoStyle}
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Verify your email address</Heading>
              <Text style={mainText}>
                Thanks for starting the new Storix account creation process. We
                want to make sure it's really you. Please enter the following
                verification code when prompted. If you don't want to
                create an account, you can ignore this message.
              </Text>
              <Section style={verificationSection}>
                <Text style={verifyText}>Verification code</Text>
                <Section style={codeContainer}>
                  <Text style={codeText}>{verificationCode}</Text>
                </Section>
                <Text style={validityText}>
                  (This code is valid for 10 minutes)
                </Text>
              </Section>
            </Section>
            <Hr style={hrStyle} />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                Storix will never email you and ask you to disclose
                or verify your password, credit card, or banking account number.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was produced and distributed by Storix,
            Inc. All rights reserved. Storix is a registered trademark
            of{' '}
            <Link href="https://storix-two.vercel.app/" target="_blank" style={link}>
              storix.com
            </Link>
            , Inc. View our{' '}
            <Link href="https://storix-two.vercel.app/" target="_blank" style={link}>
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

VerifyEmail.PreviewProps = {
  verificationCode: '596853',
} satisfies VerifyEmailProps;

const main = {
  backgroundColor: '#f6f9fc',
  color: '#212121',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#f6f9fc',
  maxWidth: '600px',
};

const coverSection = { 
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const imageSection = {
  backgroundColor: '#252f3d',
  display: 'flex',
  padding: '30px 0',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center' as const,
};

const logoStyle = {
  display: 'block',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center' as const,
  lineHeight: '1.3',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '24px 0',
};

const upperSection = { 
  padding: '40px 35px 30px',
  textAlign: 'center' as const,
};

const lowerSection = { 
  padding: '20px 35px 30px',
  textAlign: 'center' as const,
};

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '20px 20px 0',
  textAlign: 'center' as const,
  color: '#666',
  lineHeight: '1.4',
};

const verifyText = {
  ...text,
  margin: '0 0 15px 0',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  fontSize: '14px',
  color: '#666',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
};

const codeContainer = {
  backgroundColor: '#f8f9fa',
  border: '2px dashed #e9ecef',
  borderRadius: '8px',
  padding: '20px',
  margin: '15px 0',
};

const codeText = {
  ...text,
  fontWeight: 'bold',
  fontSize: '32px',
  margin: '0',
  textAlign: 'center' as const,
  color: '#2754C5',
  fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
  letterSpacing: '4px',
};

const validityText = {
  ...text,
  margin: '15px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '14px',
  color: '#666',
  fontStyle: 'italic' as const,
};

const verificationSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column' as const,
  margin: '30px 0',
};

const mainText = { 
  ...text, 
  marginBottom: '20px',
  textAlign: 'center' as const,
  color: '#555',
};

const cautionText = { 
  ...text, 
  margin: '0px',
  fontSize: '14px',
  color: '#666',
  backgroundColor: '#f8f9fa',
  padding: '15px',
  borderRadius: '6px',
  border: '1px solid #e9ecef',
};

const hrStyle = {
  borderColor: '#e9ecef',
  margin: '20px 0',
};