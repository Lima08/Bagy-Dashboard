import PieChartIcon from '@material-ui/icons/PieChart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const NAV_PATHS = [
  { option: 'Visão Geral', path: 'dashboard', icon: <PieChartIcon /> },
  { option: 'Lojas', path: 'stores', icon: <StorefrontIcon /> },
  { option: 'Vendas', path: 'sales', icon: <EmojiObjectsOutlinedIcon /> },
  { option: 'Clientes', path: 'clients', icon: <PeopleOutlinedIcon /> },
  { option: 'Produtos', path: 'products', icon: <PersonOutlineOutlinedIcon /> },
  { option: 'Planos e Metas', path: 'goals', icon: <ListAltOutlinedIcon /> },
  { option: 'Configurações', path: 'settings', icon: <SettingsOutlinedIcon /> },
  { option: 'Sair', path: '/', icon: <ExitToAppIcon /> },
];

export default NAV_PATHS;
