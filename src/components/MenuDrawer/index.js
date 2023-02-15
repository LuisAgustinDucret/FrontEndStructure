import React, { useState } from "react";
import PropTypes from "prop-types";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { locale } from "../../constants";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from '@mui/material/Collapse';
import {
    Drawer,
    Divider,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
} from "./styles";

const MenuDrawer = ({
    username,
    isShowing,
    onLogout,
    onClose,
    darkMode,
    changeThemeMode,
    redirectGrupoFamiliar,
    redirectCategorias,
    redirectSocios,
}) => {
    const strings = locale();
    const [showSociosOptions, setShowSociosOptions] = useState(false);

    return (
        <Drawer
            open={isShowing}
            variant="temporary"
            ModalProps={{
                onClose,
            }}
        >
            <Divider />
            <List
                subheader={
                    <ListSubheader>{`¡${strings.drawer.hello} ${username}!`}</ListSubheader>
                }
            />
            <Divider />
            <List>


                <ListItem button onClick={() => setShowSociosOptions(!showSociosOptions)}>
                    <ListItemIcon>
                        <AccessibilityNewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Desplegable" />
                    {showSociosOptions ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={showSociosOptions} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button onClick={redirectGrupoFamiliar}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Opcion 1" />
                        </ListItem>
                        <ListItem button onClick={redirectGrupoFamiliar}>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Opcion 2" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Fijo" onClick={redirectCategorias} />
                </ListItem>
     
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={strings.drawer.logout} onClick={onLogout} />
                </ListItem>
            </List>
        </Drawer>
    );
};

MenuDrawer.defaultProps = {
    username: "",
    isShowing: false,
    darkMode: false,
    redirectGrupoFamiliar: () => { },
    redirectCategorias: () => { },
    redirectSocios: () => { },
    onLogout: () => { },
    onClose: () => { },
    changeThemeMode: () => { },
};

MenuDrawer.propTypes = {
    username: PropTypes.string,
    isShowing: PropTypes.bool,
    darkMode: PropTypes.bool,
    onLogout: PropTypes.func,
    onClose: PropTypes.func,
    changeThemeMode: PropTypes.func,
    redirectCategorias: PropTypes.func,
    redirectSocios: PropTypes.func,
    redirectGrupoFamiliar: PropTypes.func,
};

export default MenuDrawer;
