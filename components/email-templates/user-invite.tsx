import {
    Body,
    Button,
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

interface UserInvitationEmailProps {
  orgName: string;
  roleName: string;
  linkUrl: string;
}

export const UserInvitationEmail = ({
    orgName,
    roleName,
    linkUrl
}: UserInvitationEmailProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Preview>Join {orgName} as {roleName}</Preview>
            <Container style={container}>
                <Section style={imageSection}>
                    <Img
                    src={"https://lxw8hao0qb.ufs.sh/f/43HGwtyufPQgZbGk3cSgO1dCWlyFZEtk7VJ0GbDXNcQozT2f"}
                    width="500"
                    height="150"
                    alt="Storix Logo"
                    style={logoStyle}
                    />
                </Section>

                <Heading style={h1}>Join {orgName} as {roleName}</Heading>

                <Text style={paragraph}>Hi,</Text>
                <Text style={paragraph}>
                    We're pleased to invite you to join {orgName} as {roleName}.
                </Text>
                <Text style={paragraph}>
                    To get started, please click the button below to set up your account and complete the onboarding process. This will give you access to your role information, schedule details, and all the resources you'll need to begin your position with us.
                </Text>

                <Text style={paragraph}>
                    We look forward to welcoming you to the {orgName} team and are confident you'll make a valuable contribution to our organization.
                    If you have any questions during the setup process, please don't hesitate to reach out to us.
                </Text>
                <Section style={buttonContainer}>
                    <Button style={button} href={linkUrl}>
                        Set Up Your Account
                    </Button>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default UserInvitationEmail;

const h1 = {
  color: '#1d1c1d',
  fontSize: '32px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
  textAlign: 'center' as const,
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#0000FF',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149',
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
  textAlign: 'center' as const,
};