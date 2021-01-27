import React from "react";
import { Link } from "@chakra-ui/react";

const IconExternalLink = ({ icon, href, ...rest }) => (
  <Link
    href={href}
    isExternal
    {...rest}
  >
    {icon}
  </Link>
);

export default IconExternalLink;