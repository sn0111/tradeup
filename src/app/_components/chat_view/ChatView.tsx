import { IChat, IMessage } from '@/interface/IChat';
import { IoSend } from 'react-icons/io5';

interface IChatView {
  isExpanded: boolean;
  imageWidth: number;
  userChats: IChat[];
  selectedChat: string;
  setSelectedChat: (id: string) => void;
  sendMessage: () => void;
  message: string;
  setMessage: (message: string) => void;
  chatMessages: IMessage[]
}

const ChatView = ({
  isExpanded,
  imageWidth,
  userChats,
  selectedChat,
  setSelectedChat,
  sendMessage,
  message,
  setMessage,
  chatMessages
}: IChatView) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="flex flex-col lg:flex-row p-6">
        <div
          className={`flex ${
            isExpanded
              ? 'flex-col w-64 '
              : `flex-row overflow-x-scroll flex-nowrap`
          } gap-2 lg:w-80 duration-300`}
          style={{ width: isExpanded ? '18rem' : `${imageWidth}px` }}
        >
          {userChats.map((chat, index) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-4  min-h-[72px] py-2 hover:bg-[#E4E9F1] cursor-pointer ${
                  isExpanded ? '' : 'justify-center'
                } ${selectedChat === chat.id ? 'bg-[#E4E9F1]' : 'bg-[#F8F9FB]'}`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{
                    backgroundImage: `url("${chat.product.images[0]}")`,
                  }}
                ></div>
                {isExpanded && (
                  <div className="flex flex-col justify-center">
                    <p className="text-[#141C24] text-base font-medium leading-normal line-clamp-1">
                      {chat.product.productName}
                    </p>
                    <p className="text-[#3F5374] text-sm font-normal leading-normal line-clamp-2">
                      Hey, I&apos;m interested in the textbook. Can you do $40?
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-1 flex-col bg-white rounded-lg shadow-lg">
          {/* Chat Header */}
          <div className="flex flex-wrap justify-between items-center gap-3 py-4 px-6 border-b border-[#E4E9F1]">
            <p className="text-[#141C24] text-[18px] md:text-[22px] font-bold leading-tight">
              Negotiate details for Biology Textbook
            </p>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-1 flex-col overflow-y-auto max-h-[500px] min-h-[500px] bg-white rounded-lg">
            {chatMessages.length > 0 &&
              chatMessages.map((msg, index) => {
                return msg.userId != Number(localStorage.getItem("userId")) ? (
                  <div key={index} className="flex items-end gap-3 p-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/stability/1a46c76c-ecaa-48af-aa38-ecb4bcc99d2d.png")',
                      }}
                    ></div>
                    <div className="flex flex-1 flex-col gap-1 items-start">
                      <p className="text-[#3F5374] text-[13px] font-normal leading-normal max-w-[360px]">
                        Siqi Chen
                      </p>
                      <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#E4E9F1] text-[#141C24]">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ):<div key={index} className="flex items-end gap-3 p-4 justify-end">
                <div className="flex flex-1 flex-col gap-1 items-end">
                  <p className="text-[#3F5374] text-[13px] font-normal leading-normal max-w-[360px] text-right">
                    Diane Smith
                  </p>
                  <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#F4C753] text-[#141C24]">
                    {msg.message}
                  </p>
                </div>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/559d5a52-d216-481a-bf44-a4a16128965d.png")',
                  }}
                >  
                </div>
              </div>;
              })}
            
            {/* <div className="flex items-end gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/1a46c76c-ecaa-48af-aa38-ecb4bcc99d2d.png")',
                }}
              ></div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-[#3F5374] text-[13px] font-normal leading-normal max-w-[360px]">
                  Siqi Chen
                </p>
                <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#E4E9F1] text-[#141C24]">
                  Hey, I&apos;m interested in the textbook. Can you do $40?
                </p>
              </div>
            </div>
            <div className="flex items-end gap-3 p-4 justify-end">
              <div className="flex flex-1 flex-col gap-1 items-end">
                <p className="text-[#3F5374] text-[13px] font-normal leading-normal max-w-[360px] text-right">
                  Diane Smith
                </p>
                <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#F4C753] text-[#141C24]">
                  Hi, I can do $45. It&apos;s brand new and I never used it.
                </p>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/559d5a52-d216-481a-bf44-a4a16128965d.png")',
                }}
              ></div>
            </div> */}
            {/* <div className="flex items-end gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/1a46c76c-ecaa-48af-aa38-ecb4bcc99d2d.png")',
                }}
              ></div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-[#3F5374] text-[13px] font-normal leading-normal max-w-[360px]">
                  Siqi Chen
                </p>
                <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#E4E9F1] text-[#141C24]">
                  Hey, I&apos;m interested in the textbook. Can you do $40?
                </p>
              </div>
            </div> */}
          </div>

          {/* Chat Input */}
          <div className="flex items-center px-4 py-3 gap-3 border-t border-[#E4E9F1]">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/3667371a-9186-4b73-9d33-9f37593c2eaf.png")',
              }}
            ></div>

            <div className="flex flex-1 items-center bg-[#E4E9F1] rounded-xl px-4">
              <textarea
                placeholder="Type here"
                className="form-input w-full flex-1 resize-none overflow-hidden text-[#141C24] bg-[#E4E9F1] placeholder:text-[#3F5374] rounded-xl focus:outline-none focus:ring-0 border-none h-12 max-h-32"
                rows={1}
                value={message}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement; // Type assertion to HTMLTextAreaElement
                  target.style.height = '30px'; // Reset height to auto before calculating new height
                  target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
                }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="ml-3 min-w-[44px] h-8 flex items-center justify-center bg-[#F4C753] text-[#141C24] rounded-xl"
              >
                <IoSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
