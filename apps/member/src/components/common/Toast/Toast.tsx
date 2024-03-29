import { useEffect, useState } from 'react';
import { useSetToastStore } from '@store/toast';
import type { ToastStateType } from '@type/toast';
import classNames from 'classnames';

import { FcApproval, FcHighPriority, FcCancel } from 'react-icons/fc';

interface ToastProps {
  id: number;
  state: ToastStateType;
  message: string;
}

const stateIcon = {
  success: <FcApproval />,
  error: <FcCancel />,
  warning: <FcHighPriority />,
} as const;

const Toast = ({ id, state, message }: ToastProps) => {
  const setToast = useSetToastStore();
  const [animation, setAnimation] = useState(false);

  const handleClick = () => {
    setAnimation(false);
    setTimeout(() => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  };

  useEffect(() => {
    const showTimeout = setTimeout(() => setAnimation(true), 100);
    const hideTimeout = setTimeout(() => setAnimation(false), 3700);
    const removeTimeout = setTimeout(() => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, [id, setToast]);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={classNames(
        'flex cursor-pointer items-center gap-2 rounded-lg bg-gray-900/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 ease-in-out',
        animation ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0',
      )}
      onClick={handleClick}
    >
      <div>{stateIcon[state]}</div>
      <p className="break-keep text-sm font-semibold text-white">{message}</p>
    </div>
  );
};

export default Toast;
