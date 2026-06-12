"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { loginAdmin } from "@/lib/admin/auth";
import { SITE } from "@/lib/site";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const ok = loginAdmin(email, password);
    if (ok) {
      router.push("/admin");
    } else {
      setError("E-mail ou senha incorretos.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070b14] p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,99,0.12)_0%,transparent_50%)]" />

      <div className="relative flex w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
        {/* Left branding */}
        <div className="relative hidden w-1/2 flex-col items-center justify-center bg-[#0c1018] p-12 md:flex">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,99,0.15)_0%,transparent_65%)]" />
          <div className="relative flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-2xl" />
              <Image
                src="/images/logo-shield.png"
                alt="Space Tech"
                width={120}
                height={120}
                className="relative h-28 w-28"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold tracking-[0.2em] text-primary">
              SPACE TECH
            </h1>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Explorando o universo da tecnologia e inovação
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="flex w-full flex-col justify-center bg-white px-8 py-12 md:w-1/2 md:px-12">
          <div className="mx-auto w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Painel Administrativo
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Entre com suas credenciais para acessar
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-10 text-sm text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pr-10 pl-10 text-sm text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-1/2 right-3.5 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPass ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Entrar →"}
              </button>
            </form>

            <p className="mt-10 text-center text-[11px] text-gray-400">
              © {new Date().getFullYear()} Space Tech — Equipe {SITE.season}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
