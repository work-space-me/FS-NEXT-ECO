import bgAuth from '@/assets/images/bg-authentication.jpg';
import bgAuthLeft from '@/assets/images/bg-authentication-left.jpg';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgAuth.src})`, backgroundSize: 'cover' }}
    >
      <div className="flex-1 w-auto sm:my-12  bg-white drop-shadow-xl rounded-[28px] overflow-hidden flex">
        <div className="flex relative">
          <div
            className="bg-carrot aspect-[443/758] flex justify-center items-center pr-[26px]"
            style={{
              backgroundImage: `url(${bgAuthLeft.src})`,
              backgroundSize: 'cover',
            }}
          >
            {/* <LogoVegeta className="w-[201px] h-[52px]" /> */}
          </div>
        </div>
        <div className="bg-white rounded-[26px] flex flex-1 ml-[-26px] z-10 justify-center items-center">
          <div className="w-[510px] h-[100%] py-[48px] flex flex-col items-center justify-center gap-4">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
