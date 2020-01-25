import { Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export default function ListItemLink(props) {
    const { icon, primary, to } = props;


    const renderLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link ref={ref} to={to} {...linkProps} />
            )),
        [to],
    );

    return (
            <ListItem component={renderLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
            </ListItem>
    );
}
