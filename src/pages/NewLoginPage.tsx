import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./style.css";
import myIcon1 from "../svgs/myIcon1";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left side - Background */}
      <div className="background-jpg-login">
        <div className="background-jpg-login" />
      </div>

      {/* Right side - Login form */}
      <div className="flex items-center justify-center px-8 relative">
        <div className="w-full max-w-[400px] space-y-6">
          {/* Logo */}

          <div
            className="background-svg-login"
            style={{
              height: "50vh",
              width: "50vw",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex:'999'
            }}
          ></div>

          <div className="flex justify-center relative z-[1001]">
            <svg
              width="48"
              height="50"
              viewBox="0 0 48 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_464_31744)">
                <path
                  d="M2.33028 49.0207H3.62449C3.97515 49.0207 4.34365 49.0207 4.7285 49.0028C5.76713 48.9508 6.886 48.8319 7.73296 48.6596C12.1282 47.7829 15.3585 45.2926 17.8682 41.3074C18.9083 39.6774 19.7077 37.7874 20.2991 35.6581C20.6512 34.404 20.9722 32.927 21.2426 31.2272C21.259 31.1068 21.2902 30.9879 21.3065 30.8498C21.3065 30.7978 21.3229 30.7636 21.3229 30.7116C21.4997 29.6313 21.6423 28.4619 21.7865 27.2093L21.9811 25.355C22.0747 24.661 22.1683 23.9612 22.2694 23.2539H35.4418C37.4254 23.2539 39.0391 21.5184 39.0391 19.3906V2.69817C39.0391 1.75315 38.3199 0.979004 37.4418 0.979004H37.0421C36.2917 0.979004 35.6349 0.979004 35.0435 1.01318C33.9068 1.04884 32.996 1.15137 32.0539 1.32373C27.6423 2.21675 24.1416 4.79179 21.6304 8.79476C20.6067 10.4084 19.8088 12.297 19.201 14.4278C18.8489 15.6655 18.5443 17.1246 18.2575 18.8067C18.2411 18.927 18.2248 19.0459 18.2085 19.1841L18.1936 19.2361C18.0168 20.352 17.8578 21.5719 17.7137 22.878L17.4447 25.3564C17.3808 25.8438 17.3154 26.3386 17.2471 26.8319H4.32731C2.34365 26.8319 0.72998 28.5674 0.72998 30.6967V47.303C0.72998 48.248 1.44915 49.0221 2.33028 49.0221V49.0207ZM23.1312 18.1365C23.3868 16.8646 23.6587 15.6982 23.9781 14.6848C24.5547 12.8126 25.4655 11.0607 25.8325 10.511C27.3838 8.26133 29.0628 6.78436 32.5472 5.77098C32.8504 5.6848 33.5547 5.60011 34.3377 5.53176C34.7211 5.49758 35.0406 5.80665 35.0406 6.21824V18.2732C35.0406 18.6506 34.7523 18.9597 34.4001 18.9597H23.7538C23.3541 18.9597 23.051 18.5466 23.1297 18.135L23.1312 18.1365ZM4.47144 31.8111C4.47144 31.4322 4.75822 31.1246 5.11186 31.1246H15.7582C16.1564 31.1246 16.4611 31.5362 16.3823 31.9493C16.1267 33.2212 15.8533 34.3876 15.5353 35.401C15.3897 35.8646 15.2307 36.3282 15.0554 36.7576C14.8786 37.2049 14.7032 37.6343 14.5116 37.9954C14.3511 38.3728 14.1921 38.6804 14.048 38.9567C13.9038 39.2316 13.7761 39.4367 13.6795 39.5749C13.4714 39.8839 13.2649 40.1573 13.042 40.4337C11.9544 41.8765 10.7523 42.6982 8.74039 43.6967C8.56357 43.7651 8.29017 43.8973 8.06431 43.979C7.59923 44.141 7.39715 44.1945 6.96624 44.3148C6.66312 44.3995 5.9915 44.5288 5.17575 44.5541C4.79091 44.5675 4.47293 44.2792 4.47293 43.8676V31.8126L4.47144 31.8111Z"
                  fill="#004DE1"
                />
                <path
                  d="M35.2145 31.777L35.2115 28.7295C35.2115 28.4694 35.4477 28.2584 35.7405 28.2584L43.2873 28.254V20.9598C43.2873 20.6997 43.5235 20.4902 43.8148 20.4902H47.2397V31.7696L35.2145 31.777Z"
                  fill="#004DE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_464_31744">
                  <rect
                    width="46.48"
                    height="48.0416"
                    fill="white"
                    transform="translate(0.76001 0.979004)"
                  />
                </clipPath>
              </defs>
            </svg>{" "}
          </div>

          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 relative z-[1001]"
          style={{backgroundColor:'white'}} onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="user"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password
              </a>
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-500"
              type="submit"
            >
              Sign in
            </Button>

            <Button className="w-full" variant="outline" type="button">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            © Heart Failure 2024
          </div>
        </div>
      </div>
    </div>
  );
}
