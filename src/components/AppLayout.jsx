import Nav from './Nav';
import MobileNav from './MobileNav';

function AppLayout() {
  return (
    <>
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </>
  );
}
