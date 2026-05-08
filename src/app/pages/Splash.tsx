import { useEffect } from "react";
import { useNavigate } from "react-router";
import horecaLogo from "../../assets/horeca-logo.png";
import rmeLogo from "../../assets/RME-logo.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-[#e7edfe] from-10% via-white via-50% to-[#fee8c9] to-100% w-full flex-1 flex flex-col items-center justify-between py-12 relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full px-12">
        <img src={horecaLogo} alt="The Horeca" className="w-[236px] h-auto object-contain" />
      </div>
      <div className="flex items-center justify-center gap-2 pb-6">
        <span className="text-[14px] font-medium leading-[20px] text-black">Powered by</span>
        <img src={rmeLogo} alt="RME" className="h-[26px] w-auto object-contain" />
      </div>
    </div>
  );
}
