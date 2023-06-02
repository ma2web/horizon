import { Button, Popover, Tooltip } from 'antd';
import { useEffect, useRef } from 'react';
import { ReactComponent as Help } from '../../../assets/icons/Help.svg';
import { handleKeyDown } from '../../../utils/functions';
import { useStyles } from './HelpModal.styles';

interface Props {}

const HelpModal = (props: Props) => {
  const { classes } = useStyles();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      handleKeyDown(event, 'h', () => {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      });
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className={classes.helpModal}>
      <Popover
        placement='bottomRight'
        content='Custom mapping and transformation functions that can be used in Flows or directly in the endpoint'
        trigger='click'
      >
        <Tooltip title='Press ⌘ + H' placement='left'>
          <Button icon={<Help />} ref={buttonRef} />
        </Tooltip>
      </Popover>
    </div>
  );
};

export default HelpModal;
