import React, {useState} from 'react'
import styles from './body.module.scss'

const Body = () => {
    const heading = ['Today','Yesterday','Previous 7 days']
    const detailData = [1,1,1]
    const [activeIndex, setActiveIndex] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedMessageFile, setSelectedMessageFile] = useState(null);
    const [messages, setMessages] = useState([]); // track chat messages

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSend = () => {
        if (selectedFile) {
            const newMessages = [
                ...messages,
                { type: 'file', content: selectedFile },
                { type: 'response', content: 'Analyzing your SCRU graph...', id: 'bot-response' },
            ];
            setMessages(newMessages);
            setSelectedMessageFile(selectedFile);
            setSelectedFile(null); // clear file input after sending

            // Replace the 'Analyzing...' message after 3 seconds
            setTimeout(() => {
                setMessages(prevMessages => {
                    return prevMessages.map(message => {
                        if (message.id === 'bot-response') {
                            return { ...message, type: 'response', content: 'Here’s the result: Your SCRU graph analysis is complete. 📊✅' };
                        }
                        return message;
                    });
                });
            }, 3000);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.upperside}>
                    <div className={styles.searchBar}>
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search History"/>
                    </div>
                </div>

                <div className={styles.lower}>
                    {
                        heading.map((head,headingIndex) => (
                            <div key={headingIndex} className={styles.lowerside}>
                                <div className={styles.heading}>
                                    <h3>{head}</h3>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_53_681"
                                            style={{maskType: 'alpha'}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="#AAB2FC"/>
                                        </mask>
                                        <g mask="url(#mask0_53_681)">
                                            <path d="M12 15L7 10H17L12 15Z" fill="#FF9C00"/>
                                        </g>
                                    </svg>

                                </div>

                                {
                                    detailData.map((det, detailIndex) => {
                                    const globalIndex = headingIndex * detailData.length + detailIndex;
                                    return(

                                        <div key={globalIndex}
                                             className={`${styles.details} ${activeIndex === globalIndex ? styles.active : styles.inactive}`}
                                             onClick={() => setActiveIndex(globalIndex)}
                                        >
                                            <p>History Text History Text</p>
                                            {
                                                activeIndex === globalIndex ? (
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_53_697" style={{maskType: "alpha"}}
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="24" height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_53_697)">
                                                            <path
                                                                d="M6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM18 14C17.45 14 16.9792 13.8042 16.5875 13.4125C16.1958 13.0208 16 12.55 16 12C16 11.45 16.1958 10.9792 16.5875 10.5875C16.9792 10.1958 17.45 10 18 10C18.55 10 19.0208 10.1958 19.4125 10.5875C19.8042 10.9792 20 11.45 20 12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14Z"
                                                                fill="#FF9C00"
                                                            />
                                                        </g>
                                                    </svg>) : (
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_53_698" style={{maskType: "alpha"}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_53_698)">
                                                            <path
                                                                d="M6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM18 14C17.45 14 16.9792 13.8042 16.5875 13.4125C16.1958 13.0208 16 12.55 16 12C16 11.45 16.1958 10.9792 16.5875 10.5875C16.9792 10.1958 17.45 10 18 10C18.55 10 19.0208 10.1958 19.4125 10.5875C19.8042 10.9792 20 11.45 20 12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14Z"
                                                                fill="#A2A2A2"
                                                            />
                                                        </g>
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    )})
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.main}>
                <button className={styles.topBtn}>
                    <svg
                        width="23"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="mask0_54_38"
                            style={{maskType: "alpha"}}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="30"
                            height="30"
                        >
                            <rect width="30" height="30" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_54_38)">
                            <path
                                d="M13.75 26.25V16.25H3.75V13.75H13.75V3.75H16.25V13.75H26.25V16.25H16.25V26.25H13.75Z"
                                fill="white"
                            />
                        </g>
                    </svg>

                    <p>New</p>
                </button>

                <div className={styles.chats}>

                    <h2>Good Morning , Pallavi</h2>

                    <p>Get started by image or file and let us handle all the calculations for you.</p>

                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'file' ? styles.userMsg : styles.botMsg}>
                                {msg.type === 'file' ? (
                                    msg.content.type.startsWith("image/") ? (
                                        <img src={URL.createObjectURL(msg.content)} alt="Uploaded"
                                             className={styles.chatImage}/>
                                    ) : (
                                        <div className={styles.fileBox}>
                                            <svg
                                                width="25"
                                                height="28"
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="mask0_54_160"
                                                    style={{maskType: "alpha"}}
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="35"
                                                    height="35"
                                                >
                                                    <rect width="35" height="35" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_54_160)">
                                                    <path
                                                        d="M13.1251 18.2292H14.5834V15.3125H16.0417C16.4549 15.3125 16.8013 15.1728 17.0808 14.8932C17.3603 14.6137 17.5001 14.2674 17.5001 13.8542V12.3959C17.5001 11.9827 17.3603 11.6363 17.0808 11.3568C16.8013 11.0773 16.4549 10.9375 16.0417 10.9375H13.1251V18.2292ZM14.5834 13.8542V12.3959H16.0417V13.8542H14.5834ZM18.9584 18.2292H21.8751C22.2883 18.2292 22.6346 18.0894 22.9141 17.8099C23.1937 17.5304 23.3334 17.184 23.3334 16.7709V12.3959C23.3334 11.9827 23.1937 11.6363 22.9141 11.3568C22.6346 11.0773 22.2883 10.9375 21.8751 10.9375H18.9584V18.2292ZM20.4167 16.7709V12.3959H21.8751V16.7709H20.4167ZM24.7917 18.2292H26.2501V15.3125H27.7084V13.8542H26.2501V12.3959H27.7084V10.9375H24.7917V18.2292ZM11.6667 26.25C10.8647 26.25 10.178 25.9644 9.60685 25.3932C9.03567 24.8221 8.75008 24.1354 8.75008 23.3334V5.83335C8.75008 5.03127 9.03567 4.34464 9.60685 3.77346C10.178 3.20228 10.8647 2.91669 11.6667 2.91669H29.1667C29.9688 2.91669 30.6555 3.20228 31.2266 3.77346C31.7978 4.34464 32.0834 5.03127 32.0834 5.83335V23.3334C32.0834 24.1354 31.7978 24.8221 31.2266 25.3932C30.6555 25.9644 29.9688 26.25 29.1667 26.25H11.6667ZM5.83341 32.0834C5.03133 32.0834 4.3447 31.7978 3.77352 31.2266C3.20234 30.6554 2.91675 29.9688 2.91675 29.1667V8.75002H5.83341V29.1667H26.2501V32.0834H5.83341Z"
                                                        fill="#FF2121"
                                                    />
                                                </g>
                                            </svg>

                                            <div className={styles.fileDetails}>
                                                <span className={styles.fileName}>
                                                    {selectedMessageFile.name.length > 8
                                                        ? `${selectedMessageFile.name.substring(0, 15)}...`
                                                        : selectedMessageFile.name}
                                                </span>
                                                <span className={styles.fileSize}>
                                                    {(selectedMessageFile.size / 1024).toFixed(2)} KB
                                                </span>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className={styles.response}>
                                        <p className={styles.circle}></p>
                                        <p>{msg.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className={styles.chatFooter}>
                        <div className={styles.input}>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="fileInput"
                                style={{display: 'none'}}
                                onChange={handleFileChange}
                            />

                            {/* Custom Button triggering file input */}
                            <button onClick={() => document.getElementById('fileInput').click()}>
                                <svg
                                    width="60"
                                    height="50"
                                    viewBox="0 0 69 82"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="78"
                                        height="78"
                                        rx="39"
                                        fill="#A5A5A5"
                                        fillOpacity="0.46"
                                    />
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="78"
                                        height="78"
                                        rx="39"
                                        stroke="#A2A2A2"
                                    />
                                    <mask
                                        id="mask0"
                                        style={{maskType: "alpha"}}
                                        maskUnits="userSpaceOnUse"
                                        x="22"
                                        y="22"
                                        width="35"
                                        height="35"
                                    >
                                        <rect x="22" y="22" width="35" height="35" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path
                                            d="M38.0417 52.625V40.9583H26.375V38.0417H38.0417V26.375H40.9583V38.0417H52.625V40.9583H40.9583V52.625H38.0417Z"
                                            fill="#FF9C00"
                                        />
                                    </g>
                                </svg>
                            </button>

                            {/* File name or preview */}
                            <div className={styles.fileInfo}>
                                {selectedFile ? (
                                    selectedFile.type.startsWith("image/") ? (
                                        <div className={styles.imgBox}>
                                            <img src={URL.createObjectURL(selectedFile)} alt="preview"
                                                 className={styles.preview}/>
                                            <button onClick={() => setSelectedFile(null)} className={styles.removeBtn}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>

                                    ) : (
                                        <div className={styles.fileBox}>
                                            <svg
                                                width="25"
                                                height="28"
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="mask0_54_160"
                                                    style={{maskType: "alpha"}}
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="35"
                                                    height="35"
                                                >
                                                    <rect width="35" height="35" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_54_160)">
                                                    <path
                                                        d="M13.1251 18.2292H14.5834V15.3125H16.0417C16.4549 15.3125 16.8013 15.1728 17.0808 14.8932C17.3603 14.6137 17.5001 14.2674 17.5001 13.8542V12.3959C17.5001 11.9827 17.3603 11.6363 17.0808 11.3568C16.8013 11.0773 16.4549 10.9375 16.0417 10.9375H13.1251V18.2292ZM14.5834 13.8542V12.3959H16.0417V13.8542H14.5834ZM18.9584 18.2292H21.8751C22.2883 18.2292 22.6346 18.0894 22.9141 17.8099C23.1937 17.5304 23.3334 17.184 23.3334 16.7709V12.3959C23.3334 11.9827 23.1937 11.6363 22.9141 11.3568C22.6346 11.0773 22.2883 10.9375 21.8751 10.9375H18.9584V18.2292ZM20.4167 16.7709V12.3959H21.8751V16.7709H20.4167ZM24.7917 18.2292H26.2501V15.3125H27.7084V13.8542H26.2501V12.3959H27.7084V10.9375H24.7917V18.2292ZM11.6667 26.25C10.8647 26.25 10.178 25.9644 9.60685 25.3932C9.03567 24.8221 8.75008 24.1354 8.75008 23.3334V5.83335C8.75008 5.03127 9.03567 4.34464 9.60685 3.77346C10.178 3.20228 10.8647 2.91669 11.6667 2.91669H29.1667C29.9688 2.91669 30.6555 3.20228 31.2266 3.77346C31.7978 4.34464 32.0834 5.03127 32.0834 5.83335V23.3334C32.0834 24.1354 31.7978 24.8221 31.2266 25.3932C30.6555 25.9644 29.9688 26.25 29.1667 26.25H11.6667ZM5.83341 32.0834C5.03133 32.0834 4.3447 31.7978 3.77352 31.2266C3.20234 30.6554 2.91675 29.9688 2.91675 29.1667V8.75002H5.83341V29.1667H26.2501V32.0834H5.83341Z"
                                                        fill="#FF2121"
                                                    />
                                                </g>
                                            </svg>

                                            <div className={styles.fileDetails}>
                                                <span className={styles.fileName}>
                                                    {selectedFile.name.length > 8
                                                        ? `${selectedFile.name.substring(0, 15)}...`
                                                        : selectedFile.name}
                                                </span>
                                                <span className={styles.fileSize}>
                                                    {(selectedFile.size / 1024).toFixed(2)} KB
                                                </span>
                                            </div>
                                            <button onClick={() => setSelectedFile(null)} className={styles.removeBtn}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )
                                ) : (
                                    <span>Upload</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <button className={styles.sendBtn} onClick={handleSend}>
                                <svg width="30" height="30" viewBox="0 0 39 35" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_54_116" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="1"
                                          y="0" width="35" height="35">
                                        <rect x="1" width="35" height="35" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_54_116)">
                                        <g filter="url(#filter0_d_54_116)">
                                            <path
                                                d="M5.375 29.1666V20.4166L17.0417 17.5L5.375 14.5833V5.83331L33.0833 17.5L5.375 29.1666Z"
                                                fill="#FF9C00"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body
