import { CopyToClipboard } from 'react-copy-to-clipboard';


const accountInfo = ({title, accountData, setCopiedAccount}) => {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const copyAccountNumber = async (account_number) => {
        setCopiedAccount(account_number);
        await delay(2000);
        setCopiedAccount(null);
    };

    return <>
        <div className="account-info-each">
            <div className="each-header">
                <div className="each-title">{title}</div>
            </div>
            {accountData.map((item, index) => (
                <div key={index}>
                    <hr className="each-line"></hr>
                    <div className="each-body">
                        <p className="each-account-text">
                            {item.bank_name} (예금주 : {item.account_owner}) <br/>
                            {item.account_number}
                        </p>
                        <CopyToClipboard
                            text={item.account_number}
                            onCopy={() => copyAccountNumber(item.account_number)}
                        >
                            <div className="each-copy-btn"
                            >복사하기
                            </div>
                        </CopyToClipboard>

                    </div>
                </div>
            ))}

        </div>
    </>

}

export default accountInfo;