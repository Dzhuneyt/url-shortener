import React from "react";
import {Anchor, Center, Container} from "@mantine/core";
import Link from "next/link";

const Footer: React.FC = () => {
    return <>
        <Container fluid={true}>
            <Center>
                <Link href="/legal/terms-of-use" passHref>
                    <Anchor component={'a'}>
                        Terms of Use
                    </Anchor>
                </Link>
                &nbsp; | &nbsp;
                <Link href="/legal/cookie-policy" passHref>
                    <Anchor component={'a'}>
                        Cookie Policy
                    </Anchor>
                </Link>
            </Center>
        </Container>
        <br/>
    </>;
}
export default Footer;
