//
import Accordion from "./Accordion";
import Chip from "./Chip";
import Tabs from "./Tabs";
import Table from "./Table";
import Badge from "./Badge";
import Input from "./Input";
import Radio from "./Radio";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Avatar from "./Avatar";
import Rating from "./Rating";
import Slider from "./Slider";
import Button from "./Button";
import Switch from "./Switch";
import Select from "./Select";
import SvgIcon from "./SvgIcon";
import Tooltip from "./Tooltip";
import Popover from "./Popover";
import Stepper from "./Stepper";
import Skeleton from "./Skeleton";
import Backdrop from "./Backdrop";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import Typography from "./Typography";
import Breadcrumbs from "./Breadcrumbs";
import ButtonGroup from "./ButtonGroup";
import ToggleButton from "./ToggleButton";
import LoadingButton from "./LoadingButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Accordion(theme),
    Tabs(theme),
    Chip(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    Table(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    Skeleton(theme),
    Backdrop(theme),
    DatePicker(theme),
    Typography(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
