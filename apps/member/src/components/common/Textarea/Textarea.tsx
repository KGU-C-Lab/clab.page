import classNames from 'classnames';
import { ComponentPropsWithRef } from 'react';

interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  value?: string;
  className?: string;
}

const Textarea = ({
  className,
  value = '',
  maxLength,
  ...rest
}: TextareaProps) => {
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <textarea
        className={classNames(
          'border p-2 rounded-lg focus:bg-white outline-none transition-colors',
          hasValue ? 'bg-white' : 'bg-gray-100',
          className,
        )}
        value={value}
        maxLength={maxLength}
        {...rest}
      />
      {maxLength && (
        <div
          className={classNames(
            'absolute bottom-4 right-2 bg-white text-xs px-2 rounded-lg boarder font-medium border',
            {
              'text-red-500': value.length >= maxLength,
            },
          )}
        >
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
