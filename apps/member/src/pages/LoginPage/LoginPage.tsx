import Footer from '@components/common/Footer/Footer';
import LoginButton from '@components/common/LoginButton/LoginButton';
import { Button } from '@clab/design-system';
import { MODE } from '@constants/environment';

const LoginPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center space-y-8 min-h-dvh">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-gray-500">동아리 회원만 이용할 수 있습니다.</p>
        </div>
        <LoginButton />
        {MODE !== 'production' && (
          <>
            <div className="flex items-center w-full max-w-xs gap-4">
              <hr className="grow" />
              <span className="text-sm text-gray-500">또는</span>
              <hr className="grow" />
            </div>
            <Button color="blue" className="max-w-xs py-2 px-4 w-full h-[50px]">
              합격 확인하기 🔖
            </Button>
          </>
        )}
        <div className="text-sm text-center">
          <p className="text-gray-500">C-Lab 회원이 아니신가요?</p>
          <button className="text-bold cursor-pointer underline after:content-['_↗']">
            동아리 지원하러 가기
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;
