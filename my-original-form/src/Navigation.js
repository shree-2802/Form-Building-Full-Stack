import { useNavigate } from "react-router-dom";
function Navigation() {
  const Navigate = useNavigate();
  return Navigate("/table");
}
export default Navigation;
