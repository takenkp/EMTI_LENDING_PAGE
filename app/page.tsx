import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Leaf,
  MessageSquare,
  BarChart3,
  Calendar,
  FileText,
  Users,
  Brain,
  ArrowRight,
  Clock,
  UserPlus,
  FileCheck,
  UserCog,
  LogIn,
  ClipboardList,
  User,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">EMTI</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
          </nav>
          <div className="ml-4">
            <Link href="https://docs.google.com/forms/d/e/your-form-id/viewform" target="_blank">
              <Button>컨택하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-70" />
        
        <div className="container relative flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
          <Leaf className="h-16 w-16 text-green-600 mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">마음의 연결, 상담의 시작</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            내담자와 상담사를 잇는 맞춤형 감정 기록 & AI 리포트 서비스
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://fe-mood-tracker-user.vercel.app/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                내담자 데모 페이지 바로가기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://fe-mood-tracker-counselor.vercel.app/">
              <Button size="lg" variant="outline">
                상담사 데모 페이지 바로가기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">서비스 소개</h2>
            <div className="flex justify-center mb-8">
              <img
                src="/placeimg1.avif?height=400&width=600"
                alt="상담 세션"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <p className="text-xl mb-8 text-muted-foreground">
              상담 이전부터 상담 이후까지,
              <br />
              내담자와 상담사를 연결하는 스마트한 심리 케어 솔루션
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex justify-center mb-4">
                  <FileText className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">자기 탐색</h3>
                <p className="text-sm text-muted-foreground">
                  내담자는 상담 전에 자신의 감정, 패턴, 고민을 기록하며 스스로를 탐색합니다.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex justify-center mb-4">
                  <Brain className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">AI 분석</h3>
                <p className="text-sm text-muted-foreground">
                  상담사는 AI가 분석한 내담자 기분 보고서를 바탕으로 보다 깊이 있는 상담을 준비합니다.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">지속적 관리</h3>
                <p className="text-sm text-muted-foreground">
                  상담 이후에는 상담 일지 작성을 돕는 기능으로 상담 퀄리티를 지속적으로 관리할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="flex justify-center mb-10">
            <img
              src="/placeimg2.png?height=300&width=800"
              alt="감정 분석 대시보드"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">내담자 감정 기록 & AI 기분 보고서 제공</h3>
                <p className="text-muted-foreground mb-2">내담자가 상담 이전부터 상황, 감정, 패턴을 손쉽게 기록</p>
                <p className="text-muted-foreground mb-2">
                  AI가 데이터를 분석하여 감정 트렌드, 주요 고민, 변화 그래프 등 시각적인 리포트 제공
                </p>
                <p className="text-muted-foreground">
                  내담자는 상담 전에 스스로 자신의 마음을 준비하고, 상담사는 내담자의 상태를 한눈에 파악 가능
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">맞춤형 일일 질문 생성</h3>
                <p className="text-muted-foreground mb-2">내담자의 최근 감정 및 상황에 맞는 맞춤형 질문지 자동 생성</p>
                <p className="text-muted-foreground mb-2">매일 새로운 키워드로 감정 탐색과 인사이트 제공</p>
                <p className="text-muted-foreground">반복적이지 않고 유연한 감정 기록 환경</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">상담 일지 자동 보조 및 저장</h3>
                <p className="text-muted-foreground mb-2">상담 중/후, 상담사가 손쉽게 일지 작성</p>
                <p className="text-muted-foreground mb-2">상담 요약, 내담자의 발언, 상담사의 소견 자동 정리 보조</p>
                <p className="text-muted-foreground">과거 일지 검색, 관리로 지속적인 상담 품질 유지</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">상담사 전용 관리 페이지</h3>
                <p className="text-muted-foreground mb-2">내담자별 감정 기록 및 AI 리포트 시각화</p>
                <p className="text-muted-foreground mb-2">상담 일정, 상담 내역 관리</p>
                <p className="text-muted-foreground">내담자의 기분 변화, 상담 횟수, 진행 상황 등을 한눈에 확인</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">기대 효과</h2>
          <div className="flex justify-center mb-10">
            
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">상담 전 준비</h3>
              <p className="text-sm text-muted-foreground text-center">
                상담사가 내담자의 심리상태를 미리 파악하여 더 깊이 있는 상담 진행 가능
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <MessageSquare className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">상담의 연속성</h3>
              <p className="text-sm text-muted-foreground text-center">
                내담자가 상담 외 시간에도 감정을 기록, 상담사가 이를 참고하여 지속적 관리
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">개인화된 상담</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI 기반 보고서와 맞춤형 질문으로 내담자 맞춤형 상담 제공
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">시간 절약</h3>
              <p className="text-sm text-muted-foreground text-center">
                상담 전/후 자료 준비와 관리의 자동화로 상담사 업무 부담 경감
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Section */}
      <section id="flow" className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">사용자 흐름</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-600" />
                내담자
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200" />
                <div className="space-y-8">
                  {[
                    { title: "앱 가입", icon: <UserPlus className="h-5 w-5" /> },
                    { title: "일일 감정 기록", icon: <FileText className="h-5 w-5" /> },
                    { title: "AI 보고서 확인", icon: <BarChart3 className="h-5 w-5" /> },
                    { title: "상담 예약 및 진행", icon: <Calendar className="h-5 w-5" /> },
                    { title: "상담 일지 확인", icon: <FileCheck className="h-5 w-5" /> },
                  ].map((step, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 border-4 border-white">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-medium">{step.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <UserCog className="h-6 w-6 mr-2 text-green-600" />
                상담사
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200" />
                <div className="space-y-8">
                  {[
                    { title: "상담사 로그인", icon: <LogIn className="h-5 w-5" /> },
                    { title: "내담자 목록 및 AI 리포트 확인", icon: <ClipboardList className="h-5 w-5" /> },
                    { title: "상담 진행", icon: <MessageSquare className="h-5 w-5" /> },
                    { title: "상담 일지 기록 및 관리", icon: <FileText className="h-5 w-5" /> },
                  ].map((step, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 border-4 border-white">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-medium">{step.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">기대 사용자</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <User className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">심리 상담을 준비하는 내담자</h3>
              <p className="text-sm text-muted-foreground text-center">
                자신의 감정을 정리하고 효과적인 상담을 원하는 분들
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <UserCog className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">심층 상담을 원하는 전문가 상담사</h3>
              <p className="text-sm text-muted-foreground text-center">
                내담자를 더 깊이 이해하고 효율적인 상담을 제공하고자 하는 전문가
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex justify-center mb-4">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">정서적 일기와 감정 분석을 원하는 개인 사용자</h3>
              <p className="text-sm text-muted-foreground text-center">
                자신의 감정 패턴을 이해하고 정서적 성장을 원하는 분들
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">비전</h2>
          <div className="flex justify-center mb-8">
            {/* <img
              src="/placeholder.svg?height=250&width=400"
              alt="마음의 연결 비전"
              className="rounded-lg shadow-lg max-w-full h-auto"
            /> */}
          </div>
          <p className="text-2xl font-medium italic mb-6 max-w-3xl mx-auto">
            "당신의 마음이 말을 건네기 전, 우리는 이미 듣고 있습니다."
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            상담 이전부터 내담자의 마음을 읽고,
            <br />
            상담 이후까지 함께하는 스마트 심리 케어 플랫폼.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            마음의 연결과 함께 더 효과적인 상담을 경험해보세요. 내담자와 상담사 모두를 위한 스마트한 심리 케어 솔루션이
            기다리고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://fe-mood-tracker-user.vercel.app/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                내담자 데모 페이지 바로가기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://fe-mood-tracker-counselor.vercel.app/">
              <Button size="lg" variant="outline">
                상담사 데모 페이지 바로가기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-100">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">마음의 연결</span>
              </div>
              <p className="text-gray-400 max-w-md">내담자와 상담사를 잇는 맞춤형 감정 기록 & AI 리포트 서비스</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-gray-300">서비스</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      서비스 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      주요 기능
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      가격 안내
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      자주 묻는 질문
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4 text-gray-300">회사</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      회사 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      팀
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      채용
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      블로그
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4 text-gray-300">문의</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      고객 지원
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      이메일
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      전화
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 마음의 연결. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

