import {
  IconBeans,
  IconFruit,
  IconFungi,
  IconGinger,
  IconOnion,
  IconVegetable,
} from '@/assets/icons';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface CategoryProductProps {
  id: string;
  color: string;
  icon: string;
  title: string;
}
const _RenderIcon = (indexIcon: string) => {
  switch (indexIcon) {
    case 'IconFungi':
      return <IconFungi className=" size-24 stroke-orange-500" />;
    case 'IconFruit':
      return <IconFruit className=" size-24 stroke-orange-500" />;
    case 'IconVegetable':
      return <IconVegetable className=" size-24 stroke-orange-500" />;
    case 'IconOnion':
      return <IconOnion className=" size-24 stroke-orange-500" />;
    case 'IconBeans':
      return <IconBeans className=" size-24 stroke-orange-500" />;
    case 'IconGinger':
      return <IconGinger className=" size-24 stroke-orange-500" />;
    default:
      return <IconFungi className=" size-24 stroke-orange-500" />;
  }
};

const ProductCategory = ({ id, color, icon, title }: CategoryProductProps) => {
  return (
    <Link
      href={`/product?category=${id}`}
      legacyBehavior
    >
      <div className="">
        <Badge
          className={`w-full h-24 flex border rounded-xl ${color} text-gray-600 hover:text-white`}
        >
          <div className="items-center rounded-xl py-6 px-4 gap-4">
            {_RenderIcon(icon)}
          </div>
          <div className=" text-xl font-semibold">{title}</div>
        </Badge>
      </div>
    </Link>
  );
};

export default ProductCategory;
