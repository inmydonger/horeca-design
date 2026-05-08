import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/Login/svg-3xr7tmdwo7";
import imgLogoHoreca from "../../assets/horeca-logo.png";
import imgLogoRme from "../../assets/RME-logo.png";

export default function Login() {
  const nav = useNavigate();
  const [userId, setUserId] = useState("MB-00123");
  const [password, setPassword] = useState("demo");

  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ backgroundColor: "#fbfaf9" }}
    >
      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col px-6 pt-[101px]">
        {/* HORECA Logo */}
        <div className="mb-7 mx-auto" style={{ width: 158, height: 52 }}>
          <img
            src={imgLogoHoreca}
            alt="The HORECA"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading + Subtitle */}
        <div className="mb-7">
          <h1
            className="not-italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 30,
              lineHeight: "34.5px",
              letterSpacing: "-0.75px",
              color: "#13110f",
            }}
          >
            Welcome back
          </h1>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "#68625e",
            }}
          >
            Sign in with the credentials issued by your account manager.
          </p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            nav("/");
          }}
        >
          {/* User ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="uid"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "14px",
                color: "#13110f",
              }}
            >
              User ID
            </label>
            <div
              className="relative rounded-[8px] overflow-hidden"
              style={{ backgroundColor: "#f3f3f5", height: 36 }}
            >
              <input
                id="uid"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="MB-00123"
                className="w-full h-full bg-transparent outline-none border-none px-3 py-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#68625e",
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pw"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "14px",
                color: "#13110f",
              }}
            >
              Password
            </label>
            <div
              className="relative rounded-[8px] overflow-hidden"
              style={{ backgroundColor: "#f3f3f5", height: 36 }}
            >
              <input
                id="pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*****"
                className="w-full h-full bg-transparent outline-none border-none px-3 py-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#13110f",
                }}
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded-[8px] flex items-center justify-center"
            style={{
              backgroundColor: "#dc2626",
              height: 36,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                color: "#fafafa",
              }}
            >
              Sign In
            </span>
          </button>
        </form>

        {/* Powered by RME */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "#000000",
            }}
          >
            Powered by
          </span>
          <div style={{ width: 62, height: 26 }}>
            <img
              src={imgLogoRme}
              alt="RME"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom Footer ── */}
      <div
        className="flex flex-col items-center gap-2 px-6 pb-10"
      >
        {/* Register Link */}
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 justify-center"
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "#dc2626",
            }}
          >
            Register New Buyer via Google Form
          </span>
          {/* Chevron right icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 15.9939 15.9939"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d={svgPaths.p3d22a900}
              stroke="#DC2626"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.16622"
            />
          </svg>
        </a>

        {/* Credential note */}
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "#68625e",
          }}
        >
          Credentials are issued by admin after form approval.
        </p>
      </div>
    </div>
  );
}
