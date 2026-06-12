import {
  BookOpen,
  CheckSquare,
  Code2,
  FileText,
  GraduationCap,
  Newspaper,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tag: string;
  featured?: boolean;
}

export const RESOURCES: Resource[] = [
  {
    id: "space-academy",
    title: "Space Academy",
    description:
      "Guia completo para equipes e iniciantes em robótica FTC — do zero à competição.",
    href: "/recursos/space-academy",
    icon: GraduationCap,
    tag: "Guia",
    featured: true,
  },
  {
    id: "season-guide",
    title: "Guia da Temporada",
    description:
      "Resumo das regras, cronograma e estratégias para a temporada DECODE.",
    href: "/recursos/space-academy/temporada",
    icon: BookOpen,
    tag: "Competição",
  },
  {
    id: "engineering-notebook",
    title: "Engineering Notebook",
    description:
      "Como estruturar e documentar seu caderno de engenharia para julgamento.",
    href: "/recursos/space-academy/engineering-notebook",
    icon: FileText,
    tag: "Documentação",
  },
  {
    id: "programming-basics",
    title: "Programação FTC",
    description:
      "Fundamentos de programação em Blocks, Java e Kotlin para robôs FTC.",
    href: "/recursos/space-academy/programacao",
    icon: Code2,
    tag: "Código",
  },
  {
    id: "competition-checklist",
    title: "Checklist de Competição",
    description:
      "Lista prática do que preparar antes, durante e depois de cada evento.",
    href: "/recursos/space-academy/checklist",
    icon: CheckSquare,
    tag: "Competição",
  },
  {
    id: "blog",
    title: "Últimas Novidades",
    description:
      "Blog oficial da equipe — competições, projetos, workshops e tudo que acontece na Space Tech.",
    href: "/recursos/blog",
    icon: Newspaper,
    tag: "Blog",
    featured: false,
  },
  {
    id: "getting-started",
    title: "Primeiros Passos",
    description:
      "Monte sua equipe, entenda o FTC e comece sua jornada em robótica.",
    href: "/recursos/space-academy/primeiros-passos",
    icon: Rocket,
    tag: "Iniciante",
  },
];

export interface AcademySection {
  slug: string;
  title: string;
  description?: string;
  group: string;
}

export const ACADEMY_NAV: AcademySection[] = [
  {
    slug: "",
    title: "Introdução",
    group: "Começar",
  },
  {
    slug: "primeiros-passos",
    title: "Primeiros Passos",
    group: "Começar",
  },
  {
    slug: "temporada",
    title: "Guia da Temporada",
    group: "Competição",
  },
  {
    slug: "hardware",
    title: "Hardware & Robô",
    group: "Engenharia",
  },
  {
    slug: "programacao",
    title: "Programação",
    group: "Engenharia",
  },
  {
    slug: "autonomo",
    title: "Modo Autônomo",
    group: "Engenharia",
  },
  {
    slug: "engineering-notebook",
    title: "Engineering Notebook",
    group: "Documentação",
  },
  {
    slug: "checklist",
    title: "Checklist de Competição",
    group: "Competição",
  },
];

export interface AcademyPageContent {
  slug: string;
  title: string;
  description: string;
  sections: {
    id: string;
    heading: string;
    content: string;
    code?: string;
    language?: string;
    note?: string;
  }[];
}

export const ACADEMY_PAGES: Record<string, AcademyPageContent> = {
  "": {
    slug: "",
    title: "Space Academy",
    description:
      "O guia da Space Tech para equipes FTC — aprenda robótica, engenharia e competição do jeito certo.",
    sections: [
      {
        id: "welcome",
        heading: "Bem-vindo à Space Academy",
        content:
          "A Space Academy é a documentação oficial da Space Tech para ajudar equipes FTC — especialmente iniciantes — a navegar pelo ecossistema da robótica competitiva. Aqui você encontra guias práticos, exemplos de código e boas práticas testadas em competição.",
      },
      {
        id: "who",
        heading: "Para quem é este guia?",
        content:
          "Este material foi escrito para estudantes, mentores e equipes que estão começando no FIRST Tech Challenge ou querem elevar o nível da sua temporada. Não é necessário experiência prévia em robótica.",
      },
      {
        id: "structure",
        heading: "Como navegar",
        content:
          "Use a barra lateral para explorar os tópicos. Recomendamos começar por Primeiros Passos, depois Hardware e Programação. Antes de uma competição, revise o Checklist e o guia da Temporada.",
      },
    ],
  },
  "primeiros-passos": {
    slug: "primeiros-passos",
    title: "Primeiros Passos",
    description: "Como montar sua equipe e dar os primeiros passos no FTC.",
    sections: [
      {
        id: "ftc",
        heading: "O que é o FTC?",
        content:
          "O FIRST Tech Challenge (FTC) é uma competição de robótica para estudantes de 12 a 18 anos. Equipes projetam, constroem e programam robôs para completar desafios em parceria com outras equipes.",
      },
      {
        id: "team",
        heading: "Estrutura da equipe",
        content:
          "Uma equipe FTC ideal tem divisões claras: engenharia (mecânica e elétrica), programação, operação, marketing e documentação. Mentores orientam, mas estudantes lideram as decisões.",
        note: "Equipes podem ter de 2 a 15 membros, conforme as regras da temporada.",
      },
      {
        id: "kit",
        heading: "Kit de robótica",
        content:
          "Todo time registrado recebe acesso ao kit REV ou equivalente. Familiarize-se com os componentes: Control Hub, motores, servos, sensores e sistema de U-channels.",
      },
    ],
  },
  temporada: {
    slug: "temporada",
    title: "Guia da Temporada",
    description: "DECODE presented by RTX — Temporada 2025/26.",
    sections: [
      {
        id: "game",
        heading: "Visão geral do jogo",
        content:
          "Na temporada DECODE, equipes trabalham em alianças para marcar pontos através de artefatos, padrões e desafios autônomos. Leia o Game Manual completo no site da FIRST.",
      },
      {
        id: "timeline",
        heading: "Cronograma típico",
        content:
          "Setembro: kickoff e análise do jogo. Outubro–dezembro: design e prototipagem. Janeiro–fevereiro: competições regionais. Março+: estaduais e mundiais.",
      },
      {
        id: "scoring",
        heading: "Estratégia de pontuação",
        content:
          "Identifique as tarefas de maior valor e menor risco. Teste hipóteses cedo e documente decisões no Engineering Notebook.",
      },
    ],
  },
  hardware: {
    slug: "hardware",
    title: "Hardware & Robô",
    description: "Fundamentos de design mecânico e elétrico para FTC.",
    sections: [
      {
        id: "design",
        heading: "Princípios de design",
        content:
          "Mantenha o robô simples, robusto e reparável. Priorize rigidez estrutural, roteamento limpo de cabos e acesso rápido à eletrônica.",
      },
      {
        id: "drivetrain",
        heading: "Drivetrain",
        content:
          "Mecanum, tanque (6 rodas) e swerve são as opções mais comuns. Para iniciantes, um drivetrain tank de 4 ou 6 rodas é o ponto de partida mais confiável.",
      },
      {
        id: "wiring",
        heading: "Cabeamento",
        content:
          "Use zip ties, canaletas e strain relief. Separe cabos de motor e sensores. Teste todas as conexões antes de cada partida.",
      },
    ],
  },
  programacao: {
    slug: "programacao",
    title: "Programação",
    description: "Fundamentos de programação FTC com Android Studio.",
    sections: [
      {
        id: "tools",
        heading: "Ferramentas",
        content:
          "O SDK oficial da FTC funciona com Android Studio. Equipes podem usar Blocks (visual), Java ou Kotlin. Recomendamos migrar para Java/Kotlin conforme a equipe evolui.",
      },
      {
        id: "teleop",
        heading: "TeleOp básico",
        content:
          "No modo teleoperado, o robô é controlado pelo gamepad. Mapeie motores, configure direção e adicione deadzones nos joysticks.",
        code: `@TeleOp(name="Basic Drive")
public class BasicDrive extends LinearOpMode {
    private DcMotor leftDrive;
    private DcMotor rightDrive;

    @Override
    public void runOpMode() {
        leftDrive = hardwareMap.get(DcMotor.class, "left");
        rightDrive = hardwareMap.get(DcMotor.class, "right");

        waitForStart();
        while (opModeIsActive()) {
            double y = -gamepad1.left_stick_y;
            double x = gamepad1.right_stick_x;
            leftDrive.setPower(y + x);
            rightDrive.setPower(y - x);
        }
    }
}`,
        language: "java",
      },
      {
        id: "telemetry",
        heading: "Telemetria",
        content:
          "Use telemetry para debugar sensores e estados do robô em tempo real. É essencial durante testes e competições.",
        code: `telemetry.addData("Status", "Running");
telemetry.addData("Heading", imu.getRobotYawPitchRollAngles());
telemetry.update();`,
        language: "java",
      },
    ],
  },
  autonomo: {
    slug: "autonomo",
    title: "Modo Autônomo",
    description:
      "Navegação autônoma inspirada em frameworks como Pedro Pathing.",
    sections: [
      {
        id: "intro",
        heading: "Por que autônomo importa",
        content:
          "Os primeiros 30 segundos de cada partida são autônomos e podem definir o resultado. Um autônomo confiável é um dos maiores diferenciais competitivos.",
      },
      {
        id: "pathing",
        heading: "Path following",
        content:
          "Frameworks como Pedro Pathing abstraem a cinemática do robô e permitem definir trajetórias com waypoints. O robô segue curvas suaves com controle de velocidade.",
        code: `// Exemplo conceitual — Pedro Pathing
follower.followPath(
    new Path(new BezierLine(startPose, endPose))
        .setLinearHeadingInterpolation(startHeading, endHeading)
);`,
        language: "java",
        note: "Consulte a documentação oficial do Pedro Pathing para instalação e API atualizada.",
      },
      {
        id: "sensors",
        heading: "Sensores para autônomo",
        content:
          "IMU (gyro), encoders de motor, sensores de cor e distância são os mais usados. Combine odometria com correção por visão para maior precisão.",
      },
    ],
  },
  "engineering-notebook": {
    slug: "engineering-notebook",
    title: "Engineering Notebook",
    description: "Como documentar seu processo de engenharia.",
    sections: [
      {
        id: "purpose",
        heading: "Propósito",
        content:
          "O Engineering Notebook registra o processo de design da equipe. Juízes avaliam como vocês identificaram problemas, geraram soluções e iteraram.",
      },
      {
        id: "structure",
        heading: "Estrutura recomendada",
        content:
          "Organize por datas e sprints. Inclua: brainstorming, sketches, CAD, testes, falhas e lições aprendidas. Fotos e gráficos aumentam a clareza.",
      },
      {
        id: "tips",
        heading: "Dicas da Space Tech",
        content:
          "Escreva no passado ('testamos', 'construímos'). Seja específico sobre decisões. Conecte cada mudança a um problema real.",
      },
    ],
  },
  checklist: {
    slug: "checklist",
    title: "Checklist de Competição",
    description: "O que levar e verificar antes de cada evento.",
    sections: [
      {
        id: "before",
        heading: "Antes do evento",
        content:
          "□ Robô inspecionado e dentro das regras de tamanho\n□ Baterias carregadas + extras\n□ Controles com pilhas\n□ Notebook atualizado\n□ Pit presentation preparada",
      },
      {
        id: "pit",
        heading: "No pit",
        content:
          "□ Banner e materiais de patrocinador\n□ Ferramentas básicas (chaves, zip ties, multímetro)\n□ Laptop com código atualizado\n□ Cabo USB e adaptadores",
      },
      {
        id: "match",
        heading: "Antes de cada partida",
        content:
          "□ Testar conexão do gamepad\n□ Verificar autônomo selecionado\n□ Confirmar aliança e estratégia\n□ Respirar fundo — vocês treinaram para isso",
      },
    ],
  },
};
