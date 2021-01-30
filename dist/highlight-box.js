import React from 'react';

import { Box, Divider } from '@chakra-ui/react';

export var HighlightSize;

(function (HighlightSize) {

    HighlightSize[HighlightSize["sm"] = 0] = "sm";

    HighlightSize[HighlightSize["md"] = 1] = "md";

    HighlightSize[HighlightSize["lg"] = 2] = "lg";

    HighlightSize[HighlightSize["xl"] = 3] = "xl";

})(HighlightSize || (HighlightSize = {}));

export const HighlightBox = ({ highlights, size, withBorder = false }) => {

    const renderHighlights = () => {

        return highlights.map((h, i) => {

            return (React.createElement(Box, { flex: calculateSize(), display: "flex", flexDirection: "row" },

                React.createElement(Box, { p: "5" }, h),

                withBorder && i < highlights.length - 1 ? React.createElement(Divider, { h: "80%", alignSelf: "center", borderColor: "brand.footbarTitleColor", orientation: "vertical" }) : React.createElement(React.Fragment, null)));

        });

    };

    const calculateSize = () => {

        switch (size) {

            case HighlightSize.sm:

                return "1 1 23%";

            case HighlightSize.md:

                return "1 1 32%";

            case HighlightSize.lg:

                return "1 1 49%";

            case HighlightSize.xl:

                return "1 1 100%";

        }

    };

    return (React.createElement(Box, { display: "flex", flexDirection: "row" }, renderHighlights()));

};

